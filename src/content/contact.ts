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
    phone: "+91 98200 12345",
    email: "concierge@sarikastravelsolutions.com",
    whatsapp: "+919820012345",
    address: "Level 4, The Imperial Plaza, Colaba",
    city: "Mumbai",
    country: "India",
    mapEmbedUrl: "",
    businessHours: "Mon – Fri: 10:00 AM – 6:00 PM (By Appointment Only)",
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
