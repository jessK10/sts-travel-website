import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/content/services";

export const metadata: Metadata = {
    title: "Our Services",
    description:
        "Explore our premium travel services — from honeymoon packages and family holidays to luxury escapes, adventure travel, and corporate solutions.",
};

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <HeroSection
                subtitle="Our Services"
                title="Travel Services Crafted for You"
                description="Whether it's a romantic honeymoon, a family adventure, or a corporate retreat — we have a service tailored to your needs."
                fullScreen={false}
            />

            {/* Services Grid */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        subtitle="What We Offer"
                        title="Explore Our Services"
                        description="Each service is designed with personal attention, expert knowledge, and a passion for creating unforgettable travel experiences."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <ServiceCard key={service.slug} service={service} index={i} />
                        ))}
                    </div>
                </div>
            </section>

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
