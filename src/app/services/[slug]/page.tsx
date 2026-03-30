import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/content/services";

interface ServicePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) return {};
    return {
        title: service.title,
        description: `${service.title} – Premium travel services by STS.`,
    };
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) notFound();

    return (
        <>
            {/* Hero */}
            <HeroSection
                subtitle="Our Services"
                title={service.title}
                description={`Discover our ${service.title} service — tailored with precision and care by the STS team.`}
                ctaPrimary={{ label: "Get in Touch", href: "/contact" }}
                ctaSecondary={{ label: "All Services", href: "/services" }}
                fullScreen={false}
            />

            {/* Service Detail */}
            <section className="section-padding bg-white relative z-20 -mt-16 md:-mt-32 rounded-t-[2rem] shadow-[0_-10px_60px_rgba(0,0,0,0.15)]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center">
                            <span className="text-6xl block mb-6">{service.icon}</span>
                            <h2 className="font-heading text-3xl font-medium text-dark mb-6">
                                {service.title}
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
                                We offer comprehensive {service.title.toLowerCase()} services designed
                                to meet your every need. Contact us to learn more about how we can
                                assist you.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title={`Interested in ${service.title}?`}
                description="Get in touch with our travel experts and let us create the perfect experience for you."
                buttonText="Contact Us Now"
                buttonHref="/contact"
            />

            {/* Back to Services */}
            <div className="bg-gray-50 py-8 text-center">
                <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-sm transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    Back to All Services
                </Link>
            </div>
        </>
    );
}
