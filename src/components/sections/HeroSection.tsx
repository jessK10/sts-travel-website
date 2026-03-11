"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
    title: string;
    subtitle?: string;
    description: string;
    ctaPrimary?: { label: string; href: string };
    ctaSecondary?: { label: string; href: string };
    overlay?: boolean;
    fullScreen?: boolean;
}

export default function HeroSection({
    title,
    subtitle,
    description,
    ctaPrimary,
    ctaSecondary,
    overlay = true,
    fullScreen = true,
}: HeroSectionProps) {
    const heroRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const splitTextRef = useRef<HTMLHeadingElement>(null);

    // Subtle parallax for the inner content via Framer Motion
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    useEffect(() => {
        if (!bgRef.current || !heroRef.current) return;

        // GSAP slow zoom and parallax for the cinematic background image
        const ctx = gsap.context(() => {
            // Initial slow zoom animation on load
            gsap.fromTo(
                bgRef.current,
                { scale: 1.1 },
                { scale: 1, duration: 20, ease: "power1.out" }
            );

            // Scroll parallax
            gsap.to(bgRef.current, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    // Placeholder luxury travel image (Lake Como / Mountains feel)
    const bgImageUrl = "https://images.unsplash.com/photo-1542314831-c53394142f9b?q=80&w=2670&auto=format&fit=crop";

    return (
        <section
            ref={heroRef}
            className={`relative overflow-hidden flex items-center justify-center ${fullScreen ? "min-h-screen" : "min-h-[70vh]"
                }`}
            aria-label="Hero section"
        >
            {/* Parallax Background Image */}
            <div className="absolute inset-0 -top-[10%] -bottom-[10%] w-full h-[120%] overflow-hidden z-0 bg-dark">
                <div
                    ref={bgRef}
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${bgImageUrl})` }}
                />
            </div>

            {/* Cinematic Overlays (Vignette + Gradient + Grain) */}
            {overlay && (
                <>
                    {/* Main darkening gradient */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark/90" />

                    {/* Edge vignette for cinematic focus */}
                    <div className="absolute inset-0 z-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] pointer-events-none" />

                    {/* Subtle noise/grain texture */}
                    <div
                        className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
                    />
                </>
            )}

            {/* Content Container */}
            <motion.div
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full flex flex-col items-center text-center mt-12"
                style={{ y: yContent, opacity: opacityContent }}
            >
                <div className="max-w-4xl flex flex-col items-center">
                    {/* Subtitle */}
                    {subtitle && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <span className="w-8 h-[1px] bg-accent"></span>
                            <p className="text-accent font-medium text-xs sm:text-sm uppercase tracking-[0.4em]">
                                {subtitle}
                            </p>
                            <span className="w-8 h-[1px] bg-accent"></span>
                        </motion.div>
                    )}

                    {/* Editorial Title */}
                    <motion.h1
                        ref={splitTextRef}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium text-white leading-[1.05] mb-8 tracking-tight drop-shadow-xl"
                    >
                        {title}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="text-gray-200 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl drop-shadow-md"
                    >
                        {description}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        {ctaPrimary && (
                            <Link
                                href={ctaPrimary.href}
                                className="relative overflow-hidden group inline-flex items-center justify-center gap-3 bg-primary text-white border border-primary px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-500 hover:shadow-[0_0_30px_rgba(178,31,36,0.4)]"
                            >
                                <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out z-0"></span>
                                <span className="relative z-10">{ctaPrimary.label}</span>
                                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        )}
                        {ctaSecondary && (
                            <Link
                                href={ctaSecondary.href}
                                className="inline-flex items-center justify-center px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium text-white transition-all duration-500 hover:text-accent relative after:absolute after:bottom-3 after:left-10 after:right-10 after:h-[1px] after:bg-white/30 hover:after:bg-accent after:transition-colors"
                            >
                                {ctaSecondary.label}
                            </Link>
                        )}
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom transition gradient (fade to off-white/cream if not dark mode) */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background-cream to-transparent z-10 pointer-events-none" />

            {/* Premium scroll indicator */}
            {fullScreen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
                >
                    <span className="text-[10px] uppercase text-white/60 tracking-[0.3em] font-medium">Scroll to explore</span>
                    <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                        <motion.div
                            animate={{ y: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-full bg-white"
                        />
                    </div>
                </motion.div>
            )}
        </section>
    );
}
