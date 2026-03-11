import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/content/navigation";
import { contact } from "@/content/contact";
import { company } from "@/content/company";

export default function Footer() {
    return (
        <footer className="bg-dark text-white relative overflow-hidden" role="contentinfo">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-4 lg:pr-8">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/logo.png"
                                alt={`${company.name} logo`}
                                width={160}
                                height={64}
                                className="h-12 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                            {company.description}
                        </p>
                        <p className="text-accent font-heading italic text-lg tracking-wide">
                            &ldquo;{company.tagline}&rdquo;
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1 lg:col-span-2 lg:col-start-6">
                        <h3 className="text-white font-medium text-xs uppercase tracking-[0.2em] mb-8">
                            Explore
                        </h3>
                        <ul className="space-y-4">
                            {navigation.links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light relative group inline-block"
                                    >
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300 ease-out"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1 lg:col-span-3">
                        <h3 className="text-white font-medium text-xs uppercase tracking-[0.2em] mb-8">
                            Inquiries
                        </h3>
                        <ul className="space-y-4 text-sm font-light text-gray-400">
                            <li className="flex items-start gap-4 hover:text-white transition-colors">
                                <span className="mt-0.5 text-accent text-opacity-80">📍</span>
                                <span>{contact.address}, {contact.city}, {contact.country}</span>
                            </li>
                            <li className="flex items-center gap-4 group hover:text-white transition-colors">
                                <span className="text-accent text-opacity-80">📞</span>
                                <a href={`tel:${contact.phone}`}>
                                    {contact.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-4 group hover:text-white transition-colors">
                                <span className="text-accent text-opacity-80">✉️</span>
                                <a href={`mailto:${contact.email}`}>
                                    {contact.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-4 mt-2 pt-2 border-t border-white/10 text-xs">
                                <span className="text-gray-500">Hours:</span>
                                <span>{contact.businessHours}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links & CTA */}
                    <div className="col-span-1 lg:col-span-2">
                        <h3 className="text-white font-medium text-xs uppercase tracking-[0.2em] mb-8">
                            Connect
                        </h3>
                        <div className="flex gap-4 mb-10">
                            {contact.socialLinks.map((social) => (
                                <a
                                    key={social.platform}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Follow us on ${social.platform}`}
                                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:bg-white hover:text-dark hover:border-white transition-all duration-300"
                                >
                                    <SocialIcon name={social.icon} />
                                </a>
                            ))}
                        </div>
                        <div>
                            <Link
                                href={navigation.ctaButton.href}
                                className="relative overflow-hidden group inline-flex items-center justify-center w-full px-6 py-3 text-xs uppercase tracking-[0.1em] font-medium transition-all duration-500 border border-white/30 text-white hover:border-white"
                            >
                                <span className="absolute inset-0 w-full h-full bg-white -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out z-0"></span>
                                <span className="relative z-10 group-hover:text-dark transition-colors duration-300">{navigation.ctaButton.label}</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-xs font-light tracking-wide uppercase">
                        © {new Date().getFullYear()} {company.name}. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-[10px] tracking-[0.2em] uppercase">
                        Designed for unforgettable journeys
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ name }: { name: string }) {
    const icons: Record<string, React.ReactNode> = {
        instagram: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
        facebook: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
        whatsapp: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
        linkedin: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    };
    return <>{icons[name] || null}</>;
}
