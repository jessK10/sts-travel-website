"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/content/services";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, connect to API / form service
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormState({ name: "", email: "", phone: "", service: "", message: "" });
    };

    return (
        <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                        </label>
                        <input
                            id="contact-name"
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
                            placeholder="Your full name"
                        />
                    </div>
                    <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                        </label>
                        <input
                            id="contact-email"
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
                            placeholder="you@example.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone / WhatsApp
                        </label>
                        <input
                            id="contact-phone"
                            type="tel"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
                            placeholder="+91 98765 43210"
                        />
                    </div>
                    <div>
                        <label htmlFor="contact-service" className="block text-sm font-medium text-gray-700 mb-2">
                            Service Interested In
                        </label>
                        <select
                            id="contact-service"
                            value={formState.service}
                            onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white appearance-none"
                        >
                            <option value="">Select a service</option>
                            {services.map((s) => (
                                <option key={s.slug} value={s.slug}>
                                    {s.title}
                                </option>
                            ))}
                            <option value="other">Other / General Inquiry</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message *
                    </label>
                    <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white resize-none"
                        placeholder="Tell us about your dream trip..."
                    />
                </div>

                <div>
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
                    >
                        {submitted ? "✓ Message Sent!" : "Send Message"}
                    </motion.button>
                </div>

                {submitted && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green-600 text-sm font-medium"
                    >
                        Thank you! We&apos;ll get back to you within 24 hours.
                    </motion.p>
                )}
            </form>
        </AnimatedSection>
    );
}
