"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Service } from "@/content/services";

interface ServiceCardProps {
    service: Service;
    index?: number;
}

// Fallback images to demonstrate the premium design until real client photos are uploaded
const fallbackImages: Record<string, string> = {
    "honeymoon-packages": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
    "family-holidays": "https://images.unsplash.com/photo-1544333323-1678f44fffc7?q=80&w=2070&auto=format&fit=crop",
    "group-tours": "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
    "corporate-travel": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
    "luxury-escapes": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    "adventure-travel": "https://images.unsplash.com/photo-1533587851505-d119e13bf0eb?q=80&w=2070&auto=format&fit=crop",
};

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
    const imageUrl = fallbackImages[service.slug] || "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop";

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="h-full"
        >
            <Link
                href={`/services/${service.slug}`}
                className="group block h-full bg-white overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2 flex flex-col"
            >
                {/* Premium Image Header */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                    <div
                        className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    />

                    {/* Elegant overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Hover Red Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-heading text-2xl font-medium text-dark mb-3 group-hover:text-primary transition-colors duration-500">
                        {service.title}
                    </h3>

                    <p className="text-gray-500 font-light text-base leading-relaxed mb-8 flex-grow">
                        {service.shortDescription}
                    </p>

                    {/* Premium Read More Link */}
                    <span className="flex items-center gap-3 text-sm tracking-widest uppercase font-medium text-dark group-hover:text-primary transition-colors duration-300">
                        <span className="relative">
                            Discover More
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500 ease-out"></span>
                        </span>
                        <svg
                            className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-out"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </div>
            </Link>
        </motion.div>
    );
}
