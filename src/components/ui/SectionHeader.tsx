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
        <AnimatedSection className={`mb-16 md:mb-20 ${centered ? "text-center flex flex-col items-center" : "flex flex-col items-start"}`}>
            {subtitle && (
                <div className="flex items-center gap-4 mb-4">
                    {!centered && <span className={`w-8 h-[1px] ${light ? "bg-accent-light" : "bg-primary"}`}></span>}
                    <span
                        className={`inline-block text-xs sm:text-sm font-medium uppercase tracking-[0.3em] ${light ? "text-accent-light" : "text-primary"
                            }`}
                    >
                        {subtitle}
                    </span>
                    <span className={`w-8 h-[1px] ${light ? "bg-accent-light" : "bg-primary"}`}></span>
                </div>
            )}

            <h2
                className={`font-heading text-4xl md:text-5xl lg:text-5xl font-medium leading-tight mb-6 tracking-tight ${light ? "text-white" : "text-dark"
                    }`}
            >
                {title}
            </h2>

            {description && (
                <p
                    className={`max-w-2xl text-base md:text-lg font-light leading-relaxed ${centered ? "mx-auto text-center" : "text-left"
                        } ${light ? "text-gray-300" : "text-gray-500"}`}
                >
                    {description}
                </p>
            )}

            {/* Elegant, thin divider instead of thick gradient block */}
            <div
                className={`mt-10 h-[1px] w-24 ${light ? "bg-gradient-to-r from-transparent via-white/50 to-transparent" : "bg-gradient-to-r from-transparent via-gray-300 to-transparent"} ${centered ? "mx-auto" : ""
                    }`}
            />
        </AnimatedSection>
    );
}
