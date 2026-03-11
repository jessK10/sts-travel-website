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
    height = "h-[50vh]",
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
        <section ref={sectionRef} className={`relative overflow-hidden ${height}`}>
            <div
                ref={bgRef}
                className="absolute inset-0 -top-[20%] -bottom-[20%] bg-gradient-to-br from-secondary via-dark to-primary/30"
            >
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent rounded-full blur-3xl" />
                    <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary rounded-full blur-3xl" />
                </div>
            </div>

            <div className="absolute inset-0 bg-dark/50" />

            {(title || subtitle) && (
                <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
                    <div>
                        {subtitle && (
                            <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3 font-semibold">
                                {subtitle}
                            </p>
                        )}
                        {title && (
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
                                {title}
                            </h2>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
