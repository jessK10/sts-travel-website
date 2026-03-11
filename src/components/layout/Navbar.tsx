"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navigation } from "@/content/navigation";
import { company } from "@/content/company";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group" aria-label={`${company.name} - Home`}>
                        <Image
                            src="/logo.png"
                            alt={`${company.name} logo`}
                            width={120}
                            height={48}
                            className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigation.links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary ${scrolled ? "text-gray-700" : "text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href={navigation.ctaButton.href}
                            className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                        >
                            {navigation.ctaButton.label}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center"
                        aria-label="Toggle mobile menu"
                        aria-expanded={mobileOpen}
                    >
                        <div className="flex flex-col gap-1.5">
                            <span
                                className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-gray-800" : "bg-white"
                                    } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
                            />
                            <span
                                className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-gray-800" : "bg-white"
                                    } ${mobileOpen ? "opacity-0" : ""}`}
                            />
                            <span
                                className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-gray-800" : "bg-white"
                                    } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="pb-6 pt-2 space-y-3">
                        {navigation.links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`block px-4 py-2.5 text-base font-medium rounded-lg transition-colors ${scrolled
                                        ? "text-gray-700 hover:bg-gray-100"
                                        : "text-white hover:bg-white/10"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href={navigation.ctaButton.href}
                            onClick={() => setMobileOpen(false)}
                            className="block mx-4 text-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                        >
                            {navigation.ctaButton.label}
                        </Link>
                    </div>
                </motion.div>
            </nav>
        </motion.header>
    );
}
