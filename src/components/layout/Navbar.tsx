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
        setScrolled(latest > 80);
    });

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
                scrolled
                    ? "bg-white/80 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] border-b border-white/20"
                    : "bg-transparent"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            <nav className="w-full px-6 lg:px-8" aria-label="Main navigation">
                <div className="flex items-center justify-between h-20">

                    {/* LOGO + PARTNER LOGOS (UPDATED HERE) */}
                    <div className="flex items-center gap-5">
                        <Link href="/" className="flex items-center gap-3 group">
                            <Image
                                src="/logo.png"
                                alt={`${company.name} logo`}
                                width={220}
                                height={200}
                                className="h-16 sm:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-105"
                                priority
                            />
                        </Link>

                        {/* Divider */}
                        <div className="hidden sm:block h-10 w-[1px] bg-white/30"></div>

                        {/* Title */}
                        <p className="text-sm md:text-base font-semibold text-white/80 tracking-wide">
                            Members of:
                        </p>

                        {/* Partner Logos */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            <Image
                                src="/teak.png"
                                alt="TEAK"
                                width={100}
                                height={40}
                                className="h-8 sm:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition"
                            />
                            <Image
                                src="/iatte.png"
                                alt="IATTE"
                                width={100}
                                height={40}
                                className="h-8 sm:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition"
                            />
                        </div>
                    </div>

                    {/* DESKTOP NAV */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navigation.links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`group relative text-sm font-medium transition-all duration-300 ${
                                    scrolled
                                        ? "text-gray-800 hover:text-primary"
                                        : "text-white/90 hover:text-white"
                                }`}
                            >
                                {link.label}

                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}

                        {/* CTA BUTTON */}
                        <Link
                            href={navigation.ctaButton.href}
                            className={`inline-flex items-center px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                                scrolled
                                    ? "bg-primary text-white shadow-lg hover:shadow-xl hover:scale-105"
                                    : "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20"
                            }`}
                        >
                            {navigation.ctaButton.label}
                        </Link>
                    </div>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
                    >
                        <span
                            className={`block w-6 h-[2px] transition-all duration-300 ${
                                scrolled || mobileOpen ? "bg-dark" : "bg-white"
                            } ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                        />
                        <span
                            className={`block w-5 h-[2px] transition-all duration-300 ${
                                scrolled || mobileOpen ? "bg-dark" : "bg-white"
                            } ${mobileOpen ? "opacity-0" : ""}`}
                        />
                        <span
                            className={`block w-6 h-[2px] transition-all duration-300 ${
                                scrolled || mobileOpen ? "bg-dark" : "bg-white"
                            } ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                        />
                    </button>
                </div>

                {/* MOBILE MENU */}
                <motion.div
                    initial={false}
                    animate={mobileOpen ? { height: "100vh", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:hidden overflow-hidden absolute top-0 left-0 w-full bg-white backdrop-blur-3xl"
                >
                    <div className="flex flex-col items-center justify-center h-full space-y-8 pb-32">
                        {navigation.links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-2xl font-medium text-dark hover:text-primary"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Link
                            href={navigation.ctaButton.href}
                            onClick={() => setMobileOpen(false)}
                            className="mt-6 px-10 py-4 rounded-full bg-primary text-white text-sm font-medium shadow-lg"
                        >
                            {navigation.ctaButton.label}
                        </Link>
                    </div>
                </motion.div>
            </nav>
        </motion.header>
    );
}