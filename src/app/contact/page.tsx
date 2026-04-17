import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ContactForm from "@/components/sections/ContactForm";
import SectionHeader from "@/components/ui/SectionHeader";
import DynamicContactHeading from "@/components/sections/DynamicContactHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { fetchContactContent } from "@/lib/notion-fetchers";

// Revalidate every 60 seconds
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Contact Us",
        description: `Get in touch with STS Travel. Call, email, or WhatsApp us to start planning your dream journey today.`,
    };
}

export default async function ContactPage() {
    // Fetch editable contact info from Notion (falls back to static data)
    const contact = await fetchContactContent();

    return (
        <div className="bg-dark/95">
            {/* Sticky Hero Container */}
            <div className="sticky top-0 z-0 h-screen w-full">
                <HeroSection
                    subtitle="Get in Touch"
                    title={contact.heroTitle}
                    description={contact.heroDescription}
                    fullScreen={true}
                />
            </div>

            {/* Sliding content sheet */}
            <div className="relative z-10 bg-white rounded-t-[2rem] shadow-[0_-16px_80px_rgba(0,0,0,0.35)] -mt-[12vh] sm:-mt-[15vh] overflow-hidden pb-10">
                <div className="flex justify-center pt-6 pb-2">
                    <div className="w-10 h-1 rounded-full bg-black/10" />
                </div>

                {/* Contact Section */}
                <section className="section-padding relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                        {/* Form — EmailJS logic completely untouched */}
                        <div className="lg:col-span-3">
                            <DynamicContactHeading />
                            <ContactForm />
                        </div>

                        {/* Contact Info — now driven by Notion */}
                        <div className="lg:col-span-2">
                            <SectionHeader
                                subtitle="Contact Information"
                                title="Reach Us Directly"
                                centered={false}
                            />
                            <AnimatedSection direction="right" delay={0.2}>
                                <div className="space-y-6">
                                    {/* Phone */}
                                    {contact.phone && (
                                    <a
                                        href={`tel:${contact.phone}`}
                                        className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-primary/5 transition-colors duration-300 group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <span className="text-xl">📞</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-dark text-sm mb-1">Phone</p>
                                            <p className="text-gray-500 text-sm">{contact.phone}</p>
                                        </div>
                                    </a>
                                    )}

                                    {/* Email */}
                                    {contact.email && (
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-primary/5 transition-colors duration-300 group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <span className="text-xl">✉️</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-dark text-sm mb-1">Email</p>
                                            <p className="text-gray-500 text-sm">{contact.email}</p>
                                        </div>
                                    </a>
                                    )}

                                    {/* WhatsApp */}
                                    {contact.whatsapp && (
                                    <a
                                        href={`https://wa.me/${contact.whatsapp}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors duration-300 group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                                            <span className="text-xl">💬</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-dark text-sm mb-1">WhatsApp</p>
                                            <p className="text-gray-500 text-sm">Chat with us instantly</p>
                                        </div>
                                    </a>
                                    )}

                                    {/* Address */}
                                    {contact.address && (
                                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50">
                                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                            <span className="text-xl">📍</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-dark text-sm mb-1">Office</p>
                                            <p className="text-gray-500 text-sm">
                                                {contact.address}<br />
                                                {contact.city}{contact.country ? `, ${contact.country}` : ""}
                                            </p>
                                        </div>
                                    </div>
                                    )}

                                    {/* Hours */}
                                    {contact.businessHours && (
                                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                            <span className="text-xl">🕐</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-dark text-sm mb-1">Business Hours</p>
                                            <p className="text-gray-500 text-sm">{contact.businessHours}</p>
                                        </div>
                                    </div>
                                    )}
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <AnimatedSection>
                        <div className="relative aspect-[21/9] md:aspect-[21/7] rounded-none md:rounded-3xl overflow-hidden bg-dark shadow-2xl">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-sm w-full mx-4">
                                    <span className="text-3xl block mb-4">📍</span>
                                    <p className="text-white text-lg font-heading font-medium tracking-wide">
                                        Our Private Office
                                    </p>
                                    <p className="text-gray-300 text-sm tracking-widest uppercase mt-2">
                                        {contact.address}, {contact.city}
                                    </p>
                                    <p className="text-accent text-xs mt-4 tracking-widest uppercase">By Appointment Only</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
            
            </div>
        </div>
    );
}
