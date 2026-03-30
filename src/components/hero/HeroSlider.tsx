"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

type Slide = {
  title: string;
  image: string;
  [key: string]: any;
};

interface HeroSliderProps {
  slides: Slide[];
}

const AUTOPLAY_INTERVAL = 3000;
const SWIPE_THRESHOLD = 50;

/* ─── Text animation variants ─── */
const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
  exit: {
    transition: { staggerChildren: 0.06, staggerDirection: -1 },
  },
};

const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: "blur(4px)",
    transition: { duration: 0.3, ease: "easeIn" as const },
  },
};

const badgeVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [[activeIndex, direction], setSlide] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);

  /* ─── Parallax scroll ─── */
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, 80]);

  /* ─── Mount reveal ─── */
  useEffect(() => {
    const id = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(id);
  }, []);

  /* ─── Navigation helpers ─── */
  const paginate = useCallback((newDirection: number) => {
    setSlide((prev) => {
      const next = (prev[0] + newDirection + slides.length) % slides.length;
      return [next, newDirection];
    });
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setSlide((prev) => [index, index > prev[0] ? 1 : -1]);
  }, []);

  /* ─── Autoplay ─── */
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => paginate(1), AUTOPLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, paginate, activeIndex]);

  /* ─── Touch / Swipe ─── */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > SWIPE_THRESHOLD) paginate(diff > 0 ? 1 : -1);
  };

  const currentSlide = slides[activeIndex];

  if (!slides.length) return null;

  return (
    <section
      ref={sectionRef}
      id="hero-slider"
      className="relative h-screen w-full overflow-hidden bg-dark"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Featured destinations slideshow"
    >
      {/* ═══════════ Background Image Stack ═══════════ */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={activeIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        >
          {/* Parallax + Ken Burns container */}
          <motion.div
            className="absolute inset-[-6%]" // overflow to allow parallax without white edges
            style={{ y: parallaxY }}
          >
            <motion.div
              className="absolute inset-0 bg-cover bg-center will-change-transform"
              style={{ backgroundImage: `url(${currentSlide.image})` }}
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 8, ease: [0.22, 0.61, 0.36, 1] }}
            />
          </motion.div>

          {/* Cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />
          {/* Vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ═══════════ Cinematic bottom fade overlay ═══════════ */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/90 to-transparent" />
      </div>

      {/* ═══════════ Content ═══════════ */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={textContainerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              exit="exit"
              className="max-w-2xl lg:max-w-3xl"
            >
              {/* Badge */}
              {currentSlide.badge && (
                <motion.div variants={badgeVariant} className="mb-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/90 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-lg shadow-primary/30 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse" />
                    {currentSlide.badge}
                  </span>
                </motion.div>
              )}

              {/* Title */}
              <motion.h1
                variants={fadeUpVariant}
                className="mb-5 font-heading text-4xl font-bold leading-[1.03] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]"
              >
                {currentSlide.title}
              </motion.h1>

              {/* Decorative line */}
              <motion.div
                variants={fadeUpVariant}
                className="mb-6 h-[1px] w-16 bg-gradient-to-r from-primary to-accent opacity-80"
              />

              {/* Subtitle */}
              <motion.p
                variants={fadeUpVariant}
                className="mb-10 max-w-xl text-base font-light leading-relaxed text-white/70 sm:text-lg md:text-xl"
              >
                {currentSlide.subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeUpVariant}
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  href={currentSlide.link}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary/40 sm:px-8 sm:py-4 sm:text-[13px]"
                >
                  {currentSlide.ctaText}
                  <ChevronRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </Link>
                <Link
                  href={currentSlide.link}
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/8 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/15 sm:px-8 sm:py-4 sm:text-[13px]"
                >
                  View Details
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ═══════════ Navigation Arrows ═══════════ */}
      <button
        onClick={() => paginate(-1)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 lg:flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/25 text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-white/35 hover:bg-black/45 hover:text-white hover:scale-110"
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
      </button>
      <button
        onClick={() => paginate(1)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 lg:flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/25 text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-white/35 hover:bg-black/45 hover:text-white hover:scale-110"
      >
        <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
      </button>

      {/* ═══════════ Progress Dots ═══════════ */}
      <div className="absolute bottom-9 left-0 right-0 z-20 flex items-center justify-center gap-3 sm:bottom-11">
        {slides.map((slide, i) => (
          <button
            key={slide._id}
            aria-label={`Go to slide ${i + 1}: ${slide.title}`}
            onClick={() => goToSlide(i)}
            className="group relative py-2"
          >
            <div
              className={`h-[3px] rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? "w-10 bg-primary shadow-md shadow-primary/50"
                  : "w-2.5 bg-white/30 group-hover:bg-white/55"
              }`}
            />
            {/* Animated progress fill */}
            {i === activeIndex && !isPaused && (
              <motion.div
                className="absolute left-0 top-2 h-[3px] rounded-full bg-white/50"
                initial={{ width: 0 }}
                animate={{ width: "2.5rem" }}
                transition={{
                  duration: AUTOPLAY_INTERVAL / 1000,
                  ease: "linear",
                }}
                key={`progress-${activeIndex}`}
              />
            )}
          </button>
        ))}
      </div>

      {/* ═══════════ Slide Counter ═══════════ */}
      <div className="absolute bottom-9 right-6 z-20 hidden items-center gap-2 sm:bottom-11 sm:right-10 lg:flex">
        <span className="font-heading text-xl font-medium text-white tabular-nums">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <span className="h-[1px] w-6 bg-white/25" />
        <span className="text-sm text-white/35 tabular-nums">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* ═══════════ Scroll cue ═══════════ */}
      <motion.div
        className="absolute bottom-9 left-1/2 z-20 -translate-x-1/2 sm:bottom-11"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-1.5"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="hidden text-[9px] font-medium uppercase tracking-[0.25em] text-white/30 md:block">
            Scroll
          </span>
          <div className="h-7 w-4 rounded-full border border-white/20 flex items-start justify-center pt-1">
            <motion.div
              className="h-1.5 w-0.5 rounded-full bg-white/50"
              animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
