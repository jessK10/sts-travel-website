"use client";

import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white relative overflow-hidden">
      {/* Soft decorative blurs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-red-50 opacity-60 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gray-100 opacity-50 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:py-40">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-16 max-w-2xl text-center md:mb-20"
        >
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
            What We Offer
          </span>
          <h2 className="font-heading text-4xl font-medium tracking-tight text-dark md:text-5xl lg:text-[3.5rem]">
            Explore Our Services
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-400 md:text-lg">
            From flights and hotels to visas and insurance — everything you need
            for a seamless journey, managed by experts who care.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                }}
                className="group relative flex flex-col items-center rounded-2xl bg-white px-6 pb-8 pt-10 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] transition-shadow duration-500 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_20px_48px_rgba(0,0,0,0.08)]"
              >
                {/* Icon container */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 transition-all duration-500 group-hover:bg-primary/[0.07] group-hover:scale-110">
                  <Icon
                    className="h-6 w-6 text-gray-400 transition-colors duration-500 group-hover:text-primary"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-[15px] font-semibold leading-snug tracking-wide text-dark">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-[13px] leading-relaxed text-gray-400">
                  {service.description}
                </p>

                {/* Link */}
                <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-gray-300 transition-colors duration-300 group-hover:text-primary">
                  Learn More
                  <svg
                    className="h-3.5 w-3.5 translate-x-0 transition-transform duration-300 group-hover:translate-x-1"
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

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-primary transition-all duration-500 group-hover:w-1/2" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
