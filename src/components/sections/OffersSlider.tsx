"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Offer } from "@/content/offers";

interface OffersSliderProps {
  offers: Offer[];
}

export default function OffersSlider({ offers }: OffersSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const touchStart = useRef(0);
  const touchEnd = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);
  const total = offers.length;

  /* ── Parallax: background moves slower than scroll ── */
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 180]);

  // Auto-slide
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current],
  );

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  // Touch / swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };
  const onTouchEnd = () => {
    const diff = touchStart.current - touchEnd.current;
    if (Math.abs(diff) > 60) {
      diff > 0 ? goNext() : goPrev();
    }
  };

  if (!offers || offers.length === 0) return null;

  const offer = offers[current];

  // Slide animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 60 : -60,
      scale: 1.05,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -60 : 60,
      scale: 0.98,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.12,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[70vh] min-h-[500px] md:h-[80vh] lg:h-[85vh] overflow-hidden bg-dark"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Background Slides with Parallax ── */}
      <motion.div className="absolute inset-0 -top-[10%] -bottom-[10%] h-[120%]" style={{ y: bgY }}>
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={offer.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            {/* Ken Burns zoom image */}
            <div className="absolute inset-0 animate-[kenburns_12s_ease-in-out_infinite_alternate]">
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                priority={current === 0}
                className="object-cover"
                sizes="100vw"
                unoptimized={offer.image.startsWith("http")}
              />
            </div>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* ── Cinematic bottom fade overlay ── */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/95 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${offer.id}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="max-w-2xl"
            >
              {/* Tag badge */}
              {offer.badge && (
                <motion.span
                  custom={0}
                  variants={textVariants}
                  className="mb-5 inline-block rounded-full bg-primary/90 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm shadow-lg"
                >
                  {offer.badge}
                </motion.span>
              )}

              {/* Title */}
              <motion.h2
                custom={1}
                variants={textVariants}
                className="mb-4 font-heading text-3xl font-medium leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl"
              >
                {offer.title}
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                custom={2}
                variants={textVariants}
                className="mb-8 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base md:text-lg md:mb-10"
              >
                {offer.subtitle}
              </motion.p>

              {/* CTA */}
              <motion.div custom={3} variants={textVariants}>
                <Link
                  href={offer.href}
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-400 hover:border-white/60 hover:bg-white/20 hover:shadow-xl hover:shadow-white/5 sm:text-base"
                >
                  {offer.ctaText || "Explore Package"}
                  <ChevronRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    strokeWidth={2}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Navigation Arrows ── */}
      {total > 1 && (
        <>
          <button
            onClick={goPrev}
            aria-label="Previous offer"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:text-white hover:border-white/40 md:left-8 md:h-14 md:w-14"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
          </button>
          <button
            onClick={goNext}
            aria-label="Next offer"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:text-white hover:border-white/40 md:right-8 md:h-14 md:w-14"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
          </button>
        </>
      )}

      {/* ── Dot Indicators ── */}
      {total > 1 && (
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5">
          {offers.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to offer ${i + 1}`}
              onClick={() => goTo(i)}
              className="group p-1"
            >
              <div
                className="h-[3px] rounded-full transition-all duration-500"
                style={{
                  width: i === current ? "32px" : "10px",
                  backgroundColor:
                    i === current
                      ? "rgba(255,255,255,0.95)"
                      : "rgba(255,255,255,0.35)",
                }}
              />
            </button>
          ))}
        </div>
      )}

      {/* ── Ken Burns keyframe ── */}
      <style jsx global>{`
        @keyframes kenburns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.08);
          }
        }
      `}</style>
    </section>
  );
}
