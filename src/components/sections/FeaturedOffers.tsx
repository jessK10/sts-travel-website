"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { offers } from "@/content/offers";

export default function FeaturedOffers() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Soft ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -right-20 top-0 h-[500px] w-[500px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(178,31,36,0.05) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-36">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between md:mb-12"
        >
          <div>
            <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">
              Featured Offers
            </span>
            <h1
              className="font-heading text-[2.4rem] font-medium leading-[1.12] tracking-tight text-dark md:text-5xl lg:text-[3.4rem]"
            >
              Curated Travel Experiences
            </h1>
          </div>

          {/* Desktop arrows */}
          <div className="hidden items-center gap-3 sm:flex">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Previous offer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-300 hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-400"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Next offer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-300 hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-400"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>

        {/* ── Carousel ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-4 flex md:-ml-5">
              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className="min-w-0 flex-shrink-0 pl-4 md:pl-5"
                  style={{ flex: "0 0 85%", maxWidth: "85%" }}
                >
                  {/* ── Card ── */}
                  <Link
                    href={offer.href}
                    className="group relative block aspect-[16/9] overflow-hidden rounded-2xl sm:aspect-[2.2/1] lg:aspect-[2.6/1]"
                  >
                    {/* Background image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url(${offer.image})` }}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Content */}
                    <div className="relative flex h-full flex-col justify-end p-7 sm:p-10 md:p-12 lg:max-w-[55%]">
                      {/* Badge */}
                      {offer.badge && (
                        <span className="mb-4 inline-block w-fit rounded-full bg-primary/90 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                          {offer.badge}
                        </span>
                      )}

                      {/* Title */}
                      <h2 className="mb-2 font-heading text-2xl font-medium leading-tight tracking-wide text-white drop-shadow-md sm:text-3xl md:text-4xl">
                        {offer.title}
                      </h2>

                      {/* Subtitle */}
                      <p className="mb-6 text-sm leading-relaxed text-white/75 sm:text-base md:mb-8">
                        {offer.subtitle}
                      </p>

                      {/* CTA */}
                      <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-400 group-hover:border-white/50 group-hover:bg-white/20 sm:text-sm">
                        {offer.ctaText}
                        <ChevronRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          strokeWidth={1.5}
                        />
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Dots (mobile & desktop) ── */}
        <div className="mt-8 flex items-center justify-center gap-2 md:mt-10">
          {offers.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to offer ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className="group p-1"
            >
              <div
                className="h-1.5 rounded-full transition-all duration-400"
                style={{
                  width: i === selectedIndex ? "28px" : "8px",
                  backgroundColor:
                    i === selectedIndex
                      ? "#B21F24"
                      : "rgba(0,0,0,0.12)",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
