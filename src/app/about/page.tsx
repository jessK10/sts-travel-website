import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { company } from "@/content/company";

export const metadata: Metadata = {
    title: "About Us",
    description: `Learn about ${company.name} — our story, mission, values, and why hundreds of travelers trust us to plan their memories.`,
};

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <HeroSection
                subtitle="Our Story"
                title="The People Behind Your Perfect Trips"
                description={`Since ${company.foundedYear}, ${company.name} has been transforming travel dreams into reality with passion, expertise, and unwavering dedication.`}
                fullScreen={false}
            />

            {/* Company Story */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <AnimatedSection>
                            <div className="relative">
                                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <span className="text-8xl block mb-4">🌏</span>
                                        <p className="font-heading text-xl font-bold text-dark">
                                            {company.founderName}
                                        </p>
                                        <p className="text-gray-500 text-sm">{company.founderTitle}</p>
                                    </div>
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-accent text-white rounded-2xl p-5 shadow-xl">
                                    <p className="font-heading text-2xl font-bold">{company.stats[2].value}</p>
                                    <p className="text-sm text-white/80">{company.stats[2].label}</p>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="right" delay={0.2}>
                            <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3 block">
                                Meet the Founder
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
                                A Journey Born from <span className="text-gradient">Passion</span>
                            </h2>
                            <p className="text-gray-500 leading-relaxed mb-6">
                                {company.founderStory}
                            </p>
                            <blockquote className="border-l-4 border-primary pl-6 italic text-gray-600">
                                &ldquo;{company.tagline}&rdquo; — that&apos;s not just our tagline, it&apos;s our promise to every client.
                            </blockquote>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        subtitle="Our Purpose"
                        title="Mission & Vision"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <AnimatedSection>
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-3xl">🎯</span>
                                </div>
                                <h3 className="font-heading text-xl font-bold text-dark mb-4">Our Mission</h3>
                                <p className="text-gray-500 leading-relaxed">{company.mission}</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.15}>
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-3xl">🔭</span>
                                </div>
                                <h3 className="font-heading text-xl font-bold text-dark mb-4">Our Vision</h3>
                                <p className="text-gray-500 leading-relaxed">{company.vision}</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        subtitle="What Drives Us"
                        title="Our Core Values"
                        description="These values guide every decision we make and every journey we plan."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {company.values.map((value, i) => (
                            <AnimatedSection key={value.title} delay={i * 0.1}>
                                <div className="text-center p-6 group">
                                    <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary group-hover:to-accent transition-all duration-500">
                                        <span className="text-3xl group-hover:text-white transition-colors duration-500">
                                            {value.icon}
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-lg font-bold text-dark mb-3">{value.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-gradient-dark py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {company.stats.map((stat, i) => (
                            <AnimatedSection key={stat.label} delay={i * 0.1}>
                                <div className="text-center">
                                    <p className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
                                        {stat.value}
                                    </p>
                                    <p className="text-gray-400 text-sm">{stat.label}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Ready to Start Your Journey?"
                description="Let our expertise turn your travel dreams into your most treasured memories."
                buttonText="Contact Us Today"
                buttonHref="/contact"
            />
        </>
    );
}
