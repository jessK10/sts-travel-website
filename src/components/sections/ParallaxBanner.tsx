"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxBannerProps {
    title?: string;
    subtitle?: string;
    height?: string;
}

export default function ParallaxBanner({
    title,
    subtitle,
    height = "h-[60vh]",
}: ParallaxBannerProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!bgRef.current || !sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                bgRef.current,
                { yPercent: -15 },
                {
                    yPercent: 15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={`relative overflow-hidden ${height} flex items-center justify-center`}>
            <div
                ref={bgRef}
                className="absolute inset-0 -top-[20%] -bottom-[20%] w-full"
            >
                {/* High-end cinematic travel image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2070&auto=format&fit=crop')" }}
                />
            </div>

            {/* Cinematic dark overlay */}
            <div className="absolute inset-0 bg-dark/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/40" />

            {(title || subtitle) && (
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
                    {subtitle && (
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-8 h-[1px] bg-white/50"></span>
                            <p className="text-white text-xs uppercase tracking-[0.4em] font-medium">
                                {subtitle}
                            </p>
                            <span className="w-8 h-[1px] bg-white/50"></span>
                        </div>
                    )}
                    {title && (
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tight drop-shadow-lg">
                            {title}
                        </h2>
                    )}
                </div>
            )}
        </section>
    );
}
