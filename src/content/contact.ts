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
    phone: "+91 99249 33880",
    email: "ststravels07@gmail.com",
    whatsapp: "+919924933880",
    address: "1305, Shivalik Shilp, Iscon Cross Road, S.G. Highway",
    city: "Ahmedabad, Gujarat - 380015",
    country: "India",
    mapEmbedUrl: "",
    businessHours: "Mon – Fri: 10:00 AM – 6:00 PM (By Appointment Only)",
    socialLinks: [
        {
            platform: "Instagram",
            url: "https://www.instagram.com/ststravels_memories?igsh=aHNjenltMnhzd3lm",
            icon: "instagram",
        },
        {
            platform: "Facebook",
            url: "https://www.facebook.com/share/14XE4vaHb3k/?mibextid=wwXIfr",
            icon: "facebook",
        },
        {
            platform: "LinkedIn",
            url: "https://linkedin.com/company/sarikastravelsolutions",
            icon: "linkedin",
        },
    ],
};
