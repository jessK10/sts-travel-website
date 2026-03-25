"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Hotel,
  Globe,
  Plane,
  BookOpen,
  Car,
  ShieldCheck,
  CalendarRange,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─── Data ─── */

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: ServiceItem[] = [
  {
    title: "Hotel Booking",
    description:
      "Handpicked luxury stays and boutique hotels tailored to your comfort and style.",
    icon: Hotel,
  },
  {
    title: "Domestic / International Tour",
    description:
      "Curated tour packages across India and the world — crafted for every kind of traveller.",
    icon: Globe,
  },
  {
    title: "Air Ticket / Visa",
    description:
      "Hassle-free flight reservations and end-to-end visa assistance for any destination.",
    icon: Plane,
  },
  {
    title: "Passport / Forex",
    description:
      "Swift passport services and competitive forex rates to keep your journey seamless.",
    icon: BookOpen,
  },
  {
    title: "Car Rental",
    description:
      "Premium chauffeur-driven and self-drive rentals for intercity or local travel.",
    icon: Car,
  },
  {
    title: "Overseas Insurance",
    description:
      "Comprehensive travel insurance plans so you explore the world with complete peace of mind.",
    icon: ShieldCheck,
  },
  {
    title: "M.I.C.E.",
    description:
      "Meetings, incentives, conferences & exhibitions — planned and executed flawlessly.",
    icon: CalendarRange,
  },
  {
    title: "FIT / GIT Booking",
    description:
      "Flexible individual and group itineraries designed around your schedule and preferences.",
    icon: Users,
  },
];

/* ─── Variants ─── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 44, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const headerLine = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/* ─── Card with mouse-follow glow ─── */

function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const Icon = service.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const glowX = useMotionValue(0.5);
  const glowY = useMotionValue(0.5);
  const smoothX = useSpring(glowX, { damping: 25, stiffness: 200 });
  const smoothY = useSpring(glowY, { damping: 25, stiffness: 200 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      glowX.set((e.clientX - rect.left) / rect.width);
      glowY.set((e.clientY - rect.top) / rect.height);
    },
    [glowX, glowY],
  );

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      whileHover={{
        y: -10,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      }}
      className="group relative"
    >
      {/* ── Outer glow (behind card) ── */}
      <motion.div
        className="pointer-events-none absolute -inset-1 rounded-3xl"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.95,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(178,31,36,0.12) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* ── Card body ── */}
      <div
        className="relative flex h-full flex-col items-center overflow-hidden rounded-2xl px-7 pb-9 pt-11 text-center transition-all duration-700"
        style={{
          background:
            "linear-gradient(165deg, rgba(255,255,255,0.95) 0%, rgba(250,249,246,0.85) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(0,0,0,0.04)",
          boxShadow: isHovered
            ? "0 8px 16px rgba(0,0,0,0.04), 0 24px 64px rgba(178,31,36,0.08), 0 0 0 1px rgba(178,31,36,0.06)"
            : "0 1px 4px rgba(0,0,0,0.03), 0 8px 28px rgba(0,0,0,0.04)",
        }}
      >
        {/* Mouse-follow glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(320px circle at calc(${smoothX.get() * 100}% ) calc(${smoothY.get() * 100}%), rgba(178,31,36,0.06) 0%, transparent 100%)`,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* Top accent shimmer */}
        <div
          className="absolute left-0 right-0 top-0 h-[1px] origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(178,31,36,0.5) 50%, transparent 100%)",
          }}
        />

        {/* ── Icon ── */}
        <div className="relative mb-7">
          {/* Icon glow ring */}
          <div
            className="absolute -inset-2 rounded-2xl opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
            style={{ backgroundColor: "rgba(178,31,36,0.08)" }}
          />
          <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-gray-50/80 ring-1 ring-black/[0.03] transition-all duration-500 group-hover:bg-primary/[0.06] group-hover:ring-primary/10 group-hover:scale-110">
            <Icon
              className="h-[26px] w-[26px] text-gray-400 transition-all duration-500 group-hover:text-primary"
              strokeWidth={1.4}
            />
          </div>
        </div>

        {/* ── Title ── */}
        <h3 className="mb-2.5 text-base font-semibold leading-snug tracking-wide text-dark transition-colors duration-500 group-hover:text-dark">
          {service.title}
        </h3>

        {/* ── Description ── */}
        <p className="mb-7 text-[13px] leading-[1.8] text-gray-400 transition-colors duration-500 group-hover:text-gray-500">
          {service.description}
        </p>

        {/* ── Learn More ── */}
        <span className="mt-auto inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-300 transition-colors duration-400 group-hover:text-primary">
          <span className="relative pb-0.5">
            Learn More
            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary/60 transition-all duration-500 ease-out group-hover:w-full" />
          </span>
          <svg
            className="h-3.5 w-3.5 translate-x-0 transition-all duration-400 group-hover:translate-x-1.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>

        {/* ── Bottom accent bar ── */}
        <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full transition-all duration-600 group-hover:w-2/3"
          style={{
            background: "linear-gradient(90deg, transparent, #B21F24, transparent)",
          }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Section ─── */

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #faf9f7 35%, #f7f5f2 65%, #ffffff 100%)",
      }}
    >
      {/* ── Ambient decorative layers ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft warm glow — top right */}
        <div
          className="absolute -right-24 -top-24 h-[600px] w-[600px] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(178,31,36,0.06) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        {/* Soft neutral glow — bottom left */}
        <div
          className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        {/* Center shimmer */}
        <div
          className="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-25"
          style={{
            background:
              "radial-gradient(ellipse, rgba(178,31,36,0.03) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-28 sm:px-8 md:py-36 lg:py-44">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-20 max-w-2xl text-center md:mb-24"
        >
          <span className="mb-5 inline-block text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">
            What We Offer
          </span>
          <h2 className="font-heading text-[2.6rem] font-medium leading-[1.15] tracking-tight text-dark md:text-5xl lg:text-[3.6rem]">
            Explore Our Services
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-gray-400 md:text-[17px]">
            From flights and hotels to visas and insurance — everything you need
            for a seamless journey, managed by experts who care.
          </p>

          {/* Animated accent line */}
          <motion.div
            variants={headerLine}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-8 h-[1px] w-16 origin-center"
            style={{
              background:
                "linear-gradient(90deg, transparent, #B21F24, transparent)",
            }}
          />
        </motion.div>

        {/* ── Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
