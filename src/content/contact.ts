export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface ContactInfo {
    phone: string;
    email: string;
    whatsapp: string;
    address: string;
    city: string;
    country: string;
    mapEmbedUrl: string;
    businessHours: string;
    socialLinks: SocialLink[];
}

export const contact: ContactInfo = {
    phone: "+91 98765 43210",
    email: "info@sarikastravelsolutions.com",
    whatsapp: "+919876543210",
    address: "123 Travel Plaza, MG Road",
    city: "Mumbai",
    country: "India",
    mapEmbedUrl: "",
    businessHours: "Mon – Sat: 9:00 AM – 7:00 PM",
    socialLinks: [
        {
            platform: "Instagram",
            url: "https://instagram.com/sarikastravelsolutions",
            icon: "instagram",
        },
        {
            platform: "Facebook",
            url: "https://facebook.com/sarikastravelsolutions",
            icon: "facebook",
        },
        {
            platform: "WhatsApp",
            url: "https://wa.me/919876543210",
            icon: "whatsapp",
        },
        {
            platform: "LinkedIn",
            url: "https://linkedin.com/company/sarikastravelsolutions",
            icon: "linkedin",
        },
    ],
};
