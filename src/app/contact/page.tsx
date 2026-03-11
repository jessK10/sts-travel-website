import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ContactForm from "@/components/sections/ContactForm";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { contact } from "@/content/contact";
import { company } from "@/content/company";

export const metadata: Metadata = {
    title: "Contact Us",
    description: `Get in touch with ${company.name}. Call, email, or WhatsApp us to start planning your dream journey today.`,
};

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <HeroSection
                subtitle="Get in Touch"
                title="Let&rsquo;s Plan Your Next Journey"
                description="Have a destination in mind? Want to explore your options? We'd love to hear from you. Reach out and let's start planning your memories."
                fullScreen={false}
            />

            {/* Contact Section */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                        {/* Form */}
                        <div className="lg:col-span-3">
                            <SectionHeader
                                subtitle="Send Us a Message"
                                title="Tell Us About Your Dream Trip"
                                centered={false}
                            />
                            <ContactForm />
                        </div>

                        {/* Contact Info */}
                        <div className="lg:col-span-2">
                            <SectionHeader
                                subtitle="Contact Information"
                                title="Reach Us Directly"
                                centered={false}
                            />
                            <AnimatedSection direction="right" delay={0.2}>
                                <div className="space-y-6">
                                    {/* Phone */}
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

                                    {/* Email */}
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

                                    {/* WhatsApp */}
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

                                    {/* Address */}
                                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50">
                                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                            <span className="text-xl">📍</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-dark text-sm mb-1">Office</p>
                                            <p className="text-gray-500 text-sm">
                                                {contact.address}<br />
                                                {contact.city}, {contact.country}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Hours */}
                                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                            <span className="text-xl">🕐</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-dark text-sm mb-1">Business Hours</p>
                                            <p className="text-gray-500 text-sm">{contact.businessHours}</p>
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="pt-4">
                                        <p className="text-sm font-semibold text-dark mb-3">Follow Us</p>
                                        <div className="flex gap-3">
                                            {contact.socialLinks.map((social) => (
                                                <a
                                                    key={social.platform}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`Follow us on ${social.platform}`}
                                                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-300"
                                                >
                                                    <span className="text-sm">{social.platform.charAt(0)}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <AnimatedSection>
                        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-gray-200">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <span className="text-5xl block mb-3">🗺️</span>
                                    <p className="text-gray-500 text-sm font-medium">
                                        Map will be integrated here
                                    </p>
                                    <p className="text-gray-400 text-xs mt-1">
                                        {contact.address}, {contact.city}, {contact.country}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
