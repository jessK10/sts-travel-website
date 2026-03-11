"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
    subtitle?: string;
    title: string;
    description?: string;
    centered?: boolean;
    light?: boolean;
}

export default function SectionHeader({
    subtitle,
    title,
    description,
    centered = true,
    light = false,
}: SectionHeaderProps) {
    return (
        <AnimatedSection className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
            {subtitle && (
                <span
                    className={`inline-block text-sm font-semibold uppercase tracking-[0.2em] mb-3 ${light ? "text-accent-light" : "text-primary"
                        }`}
                >
                    {subtitle}
                </span>
            )}
            <h2
                className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${light ? "text-white" : "text-dark"
                    }`}
            >
                {title}
            </h2>
            {description && (
                <p
                    className={`max-w-2xl text-base md:text-lg leading-relaxed ${centered ? "mx-auto" : ""
                        } ${light ? "text-gray-300" : "text-gray-500"}`}
                >
                    {description}
                </p>
            )}
            <div
                className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent ${centered ? "mx-auto" : ""
                    }`}
            />
        </AnimatedSection>
    );
}
