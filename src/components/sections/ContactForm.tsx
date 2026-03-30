"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { services } from "@/content/services";
import AnimatedSection from "@/components/ui/AnimatedSection";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });
import "react-phone-input-2/lib/style.css";

function ContactFormInner() {
    const searchParams = useSearchParams();
    const serviceQuery = searchParams.get("service");

    const matchedService = services.find(s => s.title === serviceQuery)?.slug || "";

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        service: matchedService,
        message: "",
    });

    useEffect(() => {
        if (serviceQuery) {
            const matched = services.find(s => s.title === serviceQuery)?.slug || "";
            setFormState(prev => ({ ...prev, service: matched }));
        } else {
            setFormState(prev => ({ ...prev, service: "" }));
        }
    }, [serviceQuery]);

    const [submitting, setSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        // Resolve service title from slug for the email template
        const serviceTitle =
  (services.find(s => s.slug === formState.service)?.title || formState.service || "Not specified")
    .replace("/", "-");  

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name: formState.name,
                    email: formState.email,
                    phone: formState.phone ? `+${formState.phone}` : "Not provided",
                    service: serviceTitle,
                    message: formState.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
            );

            setSubmitStatus("success");
            setFormState({ name: "", email: "", phone: "", service: matchedService, message: "" });
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } catch (error: any) {
            setSubmitStatus("error");
            setErrorMessage(error?.text || "Failed to send the message. Please try again later.");
        } finally {
            setSubmitting(false);
        }
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
                        <div className="w-full">
                            <PhoneInput
                                country={'in'}
                                value={formState.phone}
                                onChange={(phone) => setFormState({ ...formState, phone })}
                                inputProps={{
                                    name: 'phone',
                                    required: false,
                                    id: 'contact-phone',
                                }}
                                containerClass="!w-full"
                                inputClass="!w-full !max-w-full !px-4 !py-3 !pl-12 !rounded-xl !border !border-gray-200 focus:!border-primary focus:!ring-2 focus:!ring-primary/20 !outline-none !transition-all !text-sm !bg-white !h-auto"
                                buttonClass="!border-gray-200 !rounded-l-xl !bg-transparent !pl-2"
                                dropdownClass="!rounded-xl !shadow-xl !border-gray-100"
                            />
                        </div>
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
                        disabled={submitting}
                        whileHover={!submitting ? { scale: 1.02 } : {}}
                        whileTap={!submitting ? { scale: 0.98 } : {}}
                        className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {submitting ? (
                            <>
                                <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white border-t-transparent"></span>
                                Sending...
                            </>
                        ) : submitStatus === "success" ? "✓ Message Sent!" : "Send Message"}
                    </motion.button>
                </div>

                {submitStatus === "success" && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green-600 text-sm font-medium"
                    >
                        Your enquiry has been sent successfully. We&apos;ll get back to you soon!
                    </motion.p>
                )}
                {submitStatus === "error" && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm font-medium"
                    >
                        {errorMessage}
                    </motion.p>
                )}
            </form>
        </AnimatedSection>
    );
}

export default function ContactForm() {
    return (
        <Suspense fallback={
            <AnimatedSection>
                <div className="h-[600px] w-full bg-gray-50/50 rounded-2xl animate-pulse" />
            </AnimatedSection>
        }>
            <ContactFormInner />
        </Suspense>
    );
}
