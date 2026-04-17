import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import ServicesSection from "@/components/sections/ServicesSection";
import { fetchServices } from "@/lib/notion-fetchers";

// Revalidate every 60 seconds
export const revalidate = 60;

export const metadata: Metadata = {
    title: "Our Services",
    description:
        "Explore our premium travel services — hotel booking, tours, air tickets, car rental, insurance, and more.",
};

export default async function ServicesPage() {
    // Fetch editable services list from Notion (falls back to static data)
    const services = await fetchServices();

    return (
        <div className="bg-dark/95">
            {/* Sticky Hero Container */}
            <div className="sticky top-0 z-0 h-screen w-full">
                <HeroSection
                    subtitle="Our Services"
                    title="Travel Services Crafted for You"
                    description="Whether it's a domestic tour, international holiday, or corporate event — we have a service tailored to your needs."
                    fullScreen={true}
                />
            </div>

            {/* Sliding content sheet */}
            <div className="relative z-10 bg-white rounded-t-[2rem] shadow-[0_-16px_80px_rgba(0,0,0,0.35)] -mt-[12vh] sm:-mt-[15vh] overflow-hidden pb-10">
                <div className="flex justify-center pt-6 pb-2">
                    <div className="w-10 h-1 rounded-full bg-black/10" />
                </div>

                {/* Services */}
                <ServicesSection notionServices={services} />

                {/* CTA */}
                <CTASection
                    title="Not Sure Which Service Fits You?"
                    description="Don't worry! Reach out to us and we'll help you find the perfect travel solution."
                    buttonText="Get a Free Consultation"
                    buttonHref="/contact"
                    variant="dark"
                />
            </div>
        </div>
    );
}
