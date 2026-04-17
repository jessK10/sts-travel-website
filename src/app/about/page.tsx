import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { company } from "@/content/company";
import { fetchAboutContent } from "@/lib/notion-fetchers";

// Revalidate every 60 seconds
export const revalidate = 60;

export const metadata: Metadata = {
    title: "About Us",
    description: `Learn about ${company.name} — our story, mission, values, and why hundreds of travelers trust us to plan their memories.`,
};

export default async function AboutPage() {
    // Fetch editable content from Notion (falls back to static data)
    const about = await fetchAboutContent();

    return (
        <div className="bg-dark/95">
            {/* Sticky Hero Container */}
            <div className="sticky top-0 z-0 h-screen w-full">
                <HeroSection
                    subtitle="Our Story"
                    title={about.heroTitle}
                    description={about.heroDescription}
                    fullScreen={true}
                />
            </div>

            {/* Sliding content sheet */}
            <div className="relative z-10 bg-white rounded-t-[2rem] shadow-[0_-16px_80px_rgba(0,0,0,0.35)] -mt-[12vh] sm:-mt-[15vh] overflow-hidden pb-10">
                <div className="flex justify-center pt-6 pb-2">
                    <div className="w-10 h-1 rounded-full bg-black/10" />
                </div>

                {/* Company Story */}
                <section className="section-padding relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <AnimatedSection>
                            <div className="relative">
                                <div className="aspect-[4/5] rounded-2xl bg-gray-100 overflow-hidden relative shadow-2xl">
                                    <div className={`absolute inset-0 bg-cover bg-center grayscale opacity-80 mix-blend-multiply transition-all duration-700 hover:grayscale-0 hover:opacity-100`} style={{ backgroundImage: `url('${about.founderImage}')` }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-8">
                                        <p className="font-heading text-2xl font-bold text-white mb-1">
                                            {about.founderName}
                                        </p>
                                        <p className="text-white/80 text-sm uppercase tracking-widest">{about.founderTitle}</p>
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-xl max-w-[200px]">
                                    <p className="font-heading text-3xl font-bold text-dark">{about.statHighlightValue}</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{about.statHighlightLabel}</p>
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
                                {about.founderStory}
                            </p>
                            <blockquote className="border-l-4 border-primary pl-6 italic text-gray-600">
                                &ldquo;{about.tagline}&rdquo; — that&apos;s not just our tagline, it&apos;s our promise to every client.
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
                            <div className="bg-white rounded-2xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 h-full flex flex-col justify-center">
                                <span className="text-primary font-heading text-4xl mb-6 block opacity-80">01</span>
                                <h3 className="font-heading text-2xl font-bold text-dark mb-4">Our Mission</h3>
                                <p className="text-gray-500 leading-relaxed text-lg">{about.mission}</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.15}>
                            <div className="bg-dark rounded-2xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-dark h-full flex flex-col justify-center">
                                <span className="text-accent font-heading text-4xl mb-6 block opacity-80">02</span>
                                <h3 className="font-heading text-2xl font-bold text-white mb-4">Our Vision</h3>
                                <p className="text-gray-300 leading-relaxed text-lg">{about.vision}</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Values — kept from static content since it's structural */}
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
            
            </div>
        </div>
    );
}
