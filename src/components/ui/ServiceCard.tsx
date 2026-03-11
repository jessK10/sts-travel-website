"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Service } from "@/content/services";

interface ServiceCardProps {
    service: Service;
    index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link
                href={`/services/${service.slug}`}
                className="group block h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
                {/* Image placeholder with gradient overlay */}
                <div className="relative h-52 bg-gradient-to-br from-gray-200 to-gray-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                            {service.icon}
                        </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {service.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                        Learn More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </div>
            </Link>
        </motion.div>
    );
}
