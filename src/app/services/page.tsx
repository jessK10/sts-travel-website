import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import ServicesSection from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
    title: "Our Services",
    description:
        "Explore our premium travel services — hotel booking, tours, air tickets, car rental, insurance, and more.",
};

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <HeroSection
                subtitle="Our Services"
                title="Travel Services Crafted for You"
                description="Whether it's a domestic tour, international holiday, or corporate event — we have a service tailored to your needs."
                fullScreen={false}
            />

            {/* Services */}
            <div className="relative z-20 -mt-16 md:-mt-32 rounded-t-[2rem] shadow-[0_-10px_60px_rgba(0,0,0,0.15)] overflow-hidden bg-white">
                <ServicesSection />
            </div>

            {/* CTA */}
            <CTASection
                title="Not Sure Which Service Fits You?"
                description="Don't worry! Reach out to us and we'll help you find the perfect travel solution."
                buttonText="Get a Free Consultation"
                buttonHref="/contact"
                variant="dark"
            />
        </>
    );
}
