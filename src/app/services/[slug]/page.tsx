import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";
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
        description: service.shortDescription,
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
                description={service.shortDescription}
                ctaPrimary={{ label: service.ctaText, href: "/contact" }}
                ctaSecondary={{ label: "All Services", href: "/services" }}
                fullScreen={false}
            />

            {/* Full Description */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-10">
                            <span className="text-6xl block mb-6">{service.icon}</span>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed text-center">
                            {service.fullDescription}
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* What's Included */}
            <section className="section-padding bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        subtitle="Package Details"
                        title="What&rsquo;s Included"
                        description="Everything taken care of so you can focus on enjoying your journey."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {service.includedItems.map((item, i) => (
                            <AnimatedSection key={i} delay={i * 0.05}>
                                <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who It's For */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        subtitle="Perfect For"
                        title="Who This Service Is For"
                    />
                    <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                        {service.targetAudience.map((audience, i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <span className="inline-block bg-gray-50 border border-gray-200 rounded-full px-6 py-3 text-gray-700 text-sm font-medium hover:border-primary hover:text-primary transition-colors duration-300">
                                    {audience}
                                </span>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-padding bg-gradient-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        subtitle="Why This Service"
                        title="Key Benefits"
                        description="What makes this service stand out from the rest."
                        light
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {service.benefits.map((benefit, i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <div className="glass rounded-2xl p-6 text-center">
                                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                                        <span className="text-primary text-xl">★</span>
                                    </div>
                                    <p className="text-white text-sm leading-relaxed">{benefit}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="section-padding bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        subtitle="How It Works"
                        title="Our Simple Process"
                        description="From your first inquiry to your final boarding pass — here's how we make it happen."
                    />
                    <div className="space-y-8">
                        {service.processSteps.map((step, i) => (
                            <AnimatedSection key={step.step} delay={i * 0.15}>
                                <div className="flex gap-6 items-start">
                                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-heading text-xl font-bold shadow-lg shadow-primary/20">
                                        {step.step}
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="font-heading text-lg font-bold text-dark mb-2">{step.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title={service.ctaText}
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
