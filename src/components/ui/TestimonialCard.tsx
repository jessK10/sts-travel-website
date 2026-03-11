"use client";

import { motion } from "framer-motion";
import type { Testimonial } from "@/content/testimonials";

interface TestimonialCardProps {
    testimonial: Testimonial;
    index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group h-full"
        >
            <div className="h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                {/* Decorative quote */}
                <div className="absolute -top-4 -left-2 text-8xl font-heading text-primary/10 leading-none select-none">
                    &ldquo;
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 relative z-10">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                        <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 relative z-10">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                        {testimonial.avatarInitials}
                    </div>
                    <div>
                        <p className="font-semibold text-dark text-sm">{testimonial.name}</p>
                        <p className="text-gray-400 text-xs">{testimonial.role} · {testimonial.destination}</p>
                    </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
        </motion.div>
    );
}
