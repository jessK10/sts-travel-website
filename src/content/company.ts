export interface CompanyInfo {
    name: string;
    shortName: string;
    tagline: string;
    description: string;
    longDescription: string;
    foundedYear: number;
    founderName: string;
    founderTitle: string;
    founderStory: string;
    mission: string;
    vision: string;
    values: { title: string; description: string; icon: string }[];
    whyChooseUs: { title: string; description: string; icon: string }[];
    stats: { label: string; value: string }[];
}

export const company: CompanyInfo = {
    name: "STS – Sarika's Travel Solutions",
    shortName: "STS",
    tagline: "Curating your world, one extraordinary journey at a time.",
    description:
        "We are artisans of travel. At STS, we design bespoke itineraries tailored to the rhythm of your life, transforming fleeting moments into enduring legacies.",
    longDescription:
        "Founded with an uncompromising passion for discovery, STS – Sarika's Travel Solutions has established itself as a premier boutique travel consultancy. We recognize that true luxury lies in the details—the seamless transfers, the exclusive access, the intuitive understanding of your unique preferences. Our dedicated team of global travel designers works intimately with you to craft seamless, transformative journeys that transcend the ordinary and redefine how you experience the world.",
    foundedYear: 2015,
    founderName: "Sarika",
    founderTitle: "Founder & Principal Travel Designer",
    founderStory:
        "With a background steeped in global exploration and luxury hospitality, Sarika founded STS with a distinct vision: to elevate travel from a mere transaction to a deeply personal art form. Her extensive global network and insider knowledge of the world's most sought-after destinations have made STS the trusted advisor for discerning travelers, distinguished executives, and families seeking white-glove service and unparalleled discretion.",
    mission:
        "To orchestrate flawless, transformative travel experiences through meticulous planning, exclusive global partnerships, and an intuitive understanding of our clients' desires.",
    vision:
        "To remain the definitive choice in luxury travel design, where every customized itinerary sets a new standard for personalization, elegance, and awe.",
    values: [
        {
            title: "Bespoke Design",
            description:
                "Every itinerary we create is a unique masterpiece, tailored precisely to your discerning tastes and unspoken preferences.",
            icon: "✦",
        },
        {
            title: "Unrivaled Access",
            description:
                "Through our global network, we unlock doors that remain closed to the public, offering you true exclusivity.",
            icon: "★",
        },
        {
            title: "Discretion & Trust",
            description:
                "We provide absolute privacy and seamless execution, ensuring your peace of mind from departure to safe return.",
            icon: "♥",
        },
        {
            title: "Anticipatory Service",
            description:
                "We pride ourselves on anticipating your needs before they arise, delivering a frictionless luxury experience.",
            icon: "✈",
        },
    ],
    whyChooseUs: [
        {
            title: "White-Glove Curation",
            description:
                "No pre-packaged tours. We design your journey from a blank canvas, ensuring it is as magnificent as you envisioned.",
            icon: "🗺️",
        },
        {
            title: "Insider Knowledge",
            description:
                "Our travel designers personally vet properties and experiences to guarantee uncompromising quality.",
            icon: "🌍",
        },
        {
            title: "24/7 Global Concierge",
            description:
                "Enjoy the ultimate luxury of peace of mind, knowing our elite concierge team is overseeing every facet of your trip.",
            icon: "📞",
        },
        {
            title: "VIP Perks & Upgrades",
            description:
                "Leverage our prestigious industry affiliations for complimentary room upgrades, exclusive amenities, and priority access.",
            icon: "💎",
        },
        {
            title: "Flawless Execution",
            description:
                "From private aviation charters to exclusive dining reservations, we orchestrate the complex logistics entirely behind the scenes.",
            icon: "✅",
        },
        {
            title: "Enduring Relationships",
            description:
                "We don't just plan trips; we build lifelong understandings of our clients' evolving travel aspirations.",
            icon: "⭐",
        },
    ],
    stats: [
        { label: "Bespoke Itineraries Delivered", value: "2,500+" },
        { label: "Countries Explored", value: "80+" },
        { label: "Years of Excellence", value: "10+" },
        { label: "Client Retention", value: "98%" },
    ],
};
