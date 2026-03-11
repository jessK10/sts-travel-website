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
            className={`relative overflow-hidden ${isPrimary ? "bg-gradient-brand" : "bg-gradient-dark"
                }`}
        >
            {/* Decorative */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
                <AnimatedSection>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {title}
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        {description}
                    </p>
                    <Link
                        href={buttonHref}
                        className={`inline-flex items-center gap-2 px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 group ${isPrimary
                                ? "bg-white text-primary hover:bg-gray-100 hover:shadow-xl"
                                : "bg-primary text-white hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
                            }`}
                    >
                        {buttonText}
                        <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </AnimatedSection>
            </div>
        </section>
    );
}
