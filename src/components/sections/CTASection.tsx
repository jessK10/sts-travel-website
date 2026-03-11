"use client";

import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface CTASectionProps {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    variant?: "primary" | "dark";
}

export default function CTASection({
    title,
    description,
    buttonText,
    buttonHref,
    variant = "primary",
}: CTASectionProps) {
    const isPrimary = variant === "primary";

    return (
        <section
            className={`relative overflow-hidden ${isPrimary ? "bg-gradient-brand" : "bg-dark"
                }`}
        >
            {/* Cinematic Background Elements */}
            {!isPrimary && (
                <div
                    className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"
                />
            )}

            {/* Decorative abstract glow */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-[100px]" />
                <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-accent/10 blur-[80px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center flex flex-col items-center">
                <AnimatedSection className="flex flex-col items-center">
                    <span className="inline-block text-xs uppercase tracking-[0.4em] text-white/70 mb-6 font-medium">Ready To Begin?</span>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 tracking-tight">
                        {title}
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                        {description}
                    </p>
                    <Link
                        href={buttonHref}
                        className={`relative overflow-hidden group inline-flex items-center justify-center gap-3 px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-500 ${isPrimary
                            ? "bg-white text-primary border border-white hover:text-white"
                            : "bg-primary text-white border border-primary"
                            }`}
                    >
                        <span className={`absolute inset-0 w-full h-full -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out z-0 ${isPrimary ? "bg-dark" : "bg-white/20"}`}></span>
                        <span className="relative z-10">{buttonText}</span>
                        <svg
                            className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </AnimatedSection>
            </div>
        </section>
    );
}
