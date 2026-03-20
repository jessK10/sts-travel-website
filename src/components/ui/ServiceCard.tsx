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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] as const }}
            className="h-full"
        >
            <Link
                href={`/services/${service.slug}`}
                className="group block h-full bg-white overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2 flex flex-col"
            >
                <div className="p-8 flex flex-col flex-grow items-center text-center">
                    <span className="text-4xl mb-4">{service.icon}</span>
                    <h3 className="font-heading text-2xl font-medium text-dark mb-3 group-hover:text-primary transition-colors duration-500">
                        {service.title}
                    </h3>

                    <span className="flex items-center gap-3 text-sm tracking-widest uppercase font-medium text-dark group-hover:text-primary transition-colors duration-300 mt-auto">
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
