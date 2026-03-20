"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ───────────────────────────────────────────────
   Props
   ─────────────────────────────────────────────── */
interface HeroParallaxProps {
    subtitle?: string;
    title: string;
    description: string;
    ctaPrimary?: { label: string; href: string };
    ctaSecondary?: { label: string; href: string };
}

/* ───────────────────────────────────────────────
   Component
   ─────────────────────────────────────────────── */
export default function HeroParallax({
    subtitle,
    title,
    description,
    ctaPrimary,
    ctaSecondary,
}: HeroParallaxProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const textLayerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);

    const [isMobile, setIsMobile] = useState(false);

    /* ── Mobile detection ───────────────────────── */
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    /* ── GSAP Scroll-driven parallax ────────────── */
    useEffect(() => {
        if (isMobile) return;

        const wrapper = wrapperRef.current;
        const videoContainer = videoContainerRef.current;
        const text = textLayerRef.current;
        const overlay = overlayRef.current;
        const indicator = scrollIndicatorRef.current;

        if (!wrapper || !videoContainer || !text || !overlay) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapper,
                    start: "top top",
                    end: "+=100%",
                    scrub: 1.2,
                },
            });

            /* Video: cinematic zoom */
            tl.to(videoContainer, { scale: 1.15, ease: "none" }, 0);

            /* Text: drifts down, fades, merges into scene */
            tl.to(text, { yPercent: 50, opacity: 0, scale: 0.95, ease: "none" }, 0);

            /* Overlay: darkens as you scroll for transition */
            tl.to(overlay, { opacity: 0.6, ease: "none" }, 0);

            /* Scroll indicator fades */
            if (indicator) {
                tl.to(indicator, { opacity: 0, yPercent: 50, ease: "none" }, 0);
            }
        }, wrapper);

        return () => ctx.revert();
    }, [isMobile]);

    /* ─────────────────────────────────────────────
       RENDER
       ───────────────────────────────────────────── */
    return (
        <section
            ref={wrapperRef}
            className="relative w-full h-screen overflow-hidden bg-[#0c1222]"
            aria-label="Hero section"
        >
            {/* ═══════════════════════════════════════════
          VIDEO BACKGROUND LAYER
          ═══════════════════════════════════════════ */}
            <div
                ref={videoContainerRef}
                className="absolute inset-0 w-full h-full will-change-transform"
                style={{ transformOrigin: "center center" }}
            >
                {/* Video element */}
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                    /* Mobile fallback: poster image from the mountain photo */
                    poster="/hero/mountain.jpg"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
            </div>

            {/* ═══════════════════════════════════════════
          GRADIENT OVERLAY — readability + cinematic
          ═══════════════════════════════════════════ */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Main darkening gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0c1222]/60 via-[#0c1222]/25 to-[#0c1222]/80" />

                {/* Radial vignette for cinematic focus */}
                <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.6)]" />

                {/* Top gradient for navbar readability */}
                <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#0c1222]/60 to-transparent" />

                {/* Subtle film grain */}
                <div
                    className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                    style={{
                        backgroundImage:
                            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")',
                    }}
                />
            </div>

            {/* ═══════════════════════════════════════════
          SCROLL-DARKEN OVERLAY (animated by GSAP)
          ═══════════════════════════════════════════ */}
            <div
                ref={overlayRef}
                className="absolute inset-0 z-10 pointer-events-none bg-[#0c1222] opacity-0 will-change-transform"
            />

            {/* ═══════════════════════════════════════════
          TEXT CONTENT LAYER
          ═══════════════════════════════════════════ */}
            <div
                ref={textLayerRef}
                className="absolute inset-0 z-20 flex items-center justify-center will-change-transform"
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
                    {/* Subtitle with gold accents */}
                    {subtitle && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.3,
                                ease: [0.21, 0.47, 0.32, 0.98],
                            }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <span className="w-10 h-[1px] bg-[#D4AF37]" />
                            <p className="text-[#D4AF37] font-medium text-xs sm:text-sm uppercase tracking-[0.4em]">
                                {subtitle}
                            </p>
                            <span className="w-10 h-[1px] bg-[#D4AF37]" />
                        </motion.div>
                    )}

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.4,
                            delay: 0.5,
                            ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                        className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium text-white leading-[1.05] mb-8 tracking-tight"
                        style={{
                            textShadow:
                                "0 4px 40px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)",
                        }}
                    >
                        {title}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.8,
                            ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                        className="text-gray-200/90 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl"
                        style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
                    >
                        {description}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 1.1,
                            ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        {ctaPrimary && (
                            <Link
                                href={ctaPrimary.href}
                                className="relative overflow-hidden group inline-flex items-center justify-center gap-3 bg-primary text-white border border-primary px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-500 hover:shadow-[0_0_40px_rgba(178,31,36,0.5)]"
                            >
                                <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out z-0" />
                                <span className="relative z-10">{ctaPrimary.label}</span>
                                <svg
                                    className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </Link>
                        )}
                        {ctaSecondary && (
                            <Link
                                href={ctaSecondary.href}
                                className="inline-flex items-center justify-center px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-white transition-all duration-500 hover:text-[#D4AF37] relative after:absolute after:bottom-3 after:left-10 after:right-10 after:h-[1px] after:bg-white/30 hover:after:bg-[#D4AF37] after:transition-colors"
                            >
                                {ctaSecondary.label}
                            </Link>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* ═══════════════════════════════════════════
          Bottom transition to page content
          ═══════════════════════════════════════════ */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent z-30 pointer-events-none" />

            {/* ═══════════════════════════════════════════
          Premium Scroll Indicator
          ═══════════════════════════════════════════ */}
            <motion.div
                ref={scrollIndicatorRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-14 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
            >
                <span className="text-[10px] uppercase text-white/50 tracking-[0.3em] font-medium">
                    Scroll to explore
                </span>
                <div className="w-[1px] h-14 bg-white/15 relative overflow-hidden">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-full bg-white/80"
                    />
                </div>
            </motion.div>
        </section>
    );
}
