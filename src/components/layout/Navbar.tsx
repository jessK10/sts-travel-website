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
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-700 ${scrolled
                ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100"
                : "bg-transparent backdrop-blur-none"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
                <div className="flex items-center justify-between h-24 transition-all duration-500">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group" aria-label={`${company.name} - Home`}>
                        <div className="relative overflow-hidden">
                            <Image
                                src="/logo.png"
                                alt={`${company.name} logo`}
                                width={140}
                                height={56}
                                className={`h-10 sm:h-12 w-auto transition-all duration-500 ${scrolled ? "opacity-100" : "brightness-[100] drop-shadow-md"}`}
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navigation.links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`group relative text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-500 py-2 ${scrolled ? "text-dark hover:text-primary" : "text-white/90 hover:text-white"
                                    }`}
                            >
                                {link.label}
                                <span className={`absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${scrolled ? "bg-primary" : "bg-white"}`}></span>
                            </Link>
                        ))}
                        <Link
                            href={navigation.ctaButton.href}
                            className={`relative overflow-hidden group inline-flex items-center gap-2 px-8 py-3 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-500 border ${scrolled
                                    ? "bg-primary text-white border-primary hover:shadow-[0_0_20px_rgba(178,31,36,0.3)]"
                                    : "bg-white/10 text-white border-white/30 backdrop-blur-sm hover:border-white"
                                }`}
                        >
                            <span className={`absolute inset-0 w-full h-full -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out z-0 ${scrolled ? "bg-dark" : "bg-white/20"}`}></span>
                            <span className="relative z-10">{navigation.ctaButton.label}</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50 group"
                        aria-label="Toggle mobile menu"
                        aria-expanded={mobileOpen}
                    >
                        <span
                            className={`block w-6 h-[1px] transition-all duration-300 ${scrolled || mobileOpen ? "bg-dark" : "bg-white"
                                } ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                        />
                        <span
                            className={`block w-4 h-[1px] transition-all duration-300 ml-auto group-hover:w-6 ${scrolled || mobileOpen ? "bg-dark" : "bg-white"
                                } ${mobileOpen ? "opacity-0" : ""}`}
                        />
                        <span
                            className={`block w-6 h-[1px] transition-all duration-300 ${scrolled || mobileOpen ? "bg-dark" : "bg-white"
                                } ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={mobileOpen ? { height: "100vh", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="lg:hidden overflow-hidden absolute top-0 left-0 w-full bg-white backdrop-blur-3xl"
                >
                    <div className="flex flex-col items-center justify-center h-full space-y-8 pb-32">
                        {navigation.links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-2xl font-heading text-dark hover:text-primary transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href={navigation.ctaButton.href}
                            onClick={() => setMobileOpen(false)}
                            className="mt-8 relative overflow-hidden group inline-flex items-center gap-2 px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-500 bg-primary text-white border border-primary"
                        >
                            <span className="absolute inset-0 w-full h-full bg-dark -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out z-0"></span>
                            <span className="relative z-10">{navigation.ctaButton.label}</span>
                        </Link>
                    </div>
                </motion.div>
            </nav>
        </motion.header>
    );
}
