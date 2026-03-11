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
    tagline: "We plan your memories",
    description:
        "At Sarika's Travel Solutions, we craft unforgettable journeys tailored to your dreams. From exotic getaways to cultural immersions, every trip we plan is a masterpiece of personalized travel.",
    longDescription:
        "Founded with a passion for creating extraordinary travel experiences, STS – Sarika's Travel Solutions has grown into a trusted name in premium travel planning. We believe that travel is more than just visiting places — it's about creating memories that last a lifetime. Our dedicated team works tirelessly to understand your desires, preferences, and dreams, transforming them into seamless, luxurious travel experiences that exceed expectations.",
    foundedYear: 2015,
    founderName: "Sarika",
    founderTitle: "Founder & Lead Travel Consultant",
    founderStory:
        "With over a decade of experience in the travel industry, Sarika founded STS with a simple yet powerful vision: to make every journey personal, memorable, and stress-free. Her deep knowledge of destinations worldwide, combined with an unwavering commitment to client satisfaction, has made STS the go-to agency for discerning travelers who seek more than just a vacation — they seek an experience.",
    mission:
        "To transform travel dreams into reality by delivering meticulously planned, personalized journeys that create lasting memories and exceed every expectation.",
    vision:
        "To be the most trusted and sought-after travel consultancy, known for crafting life-enriching travel experiences with unmatched attention to detail and care.",
    values: [
        {
            title: "Personalization",
            description:
                "Every itinerary is uniquely crafted to match your travel style, preferences, and budget.",
            icon: "✦",
        },
        {
            title: "Excellence",
            description:
                "We hold ourselves to the highest standards in every aspect of travel planning and service.",
            icon: "★",
        },
        {
            title: "Trust",
            description:
                "Built on transparency, reliability, and genuine care for every client relationship.",
            icon: "♥",
        },
        {
            title: "Passion",
            description:
                "Our love for travel drives us to discover the best experiences and share them with you.",
            icon: "✈",
        },
    ],
    whyChooseUs: [
        {
            title: "Tailor-Made Itineraries",
            description:
                "No cookie-cutter packages. Every trip is designed specifically around your preferences, interests, and budget.",
            icon: "🗺️",
        },
        {
            title: "Expert Destination Knowledge",
            description:
                "Our team has first-hand experience with destinations worldwide, ensuring authentic recommendations.",
            icon: "🌍",
        },
        {
            title: "24/7 Travel Support",
            description:
                "From planning to your return home, we're always just a call away to assist with anything you need.",
            icon: "📞",
        },
        {
            title: "Best Value Guaranteed",
            description:
                "We leverage strong industry partnerships to offer you premium experiences at the best possible prices.",
            icon: "💎",
        },
        {
            title: "Hassle-Free Planning",
            description:
                "We handle every detail — flights, hotels, transfers, activities — so you can focus on enjoying the journey.",
            icon: "✅",
        },
        {
            title: "Trusted by Hundreds",
            description:
                "Our growing community of happy travelers speaks to the quality and care we put into every trip.",
            icon: "⭐",
        },
    ],
    stats: [
        { label: "Happy Travelers", value: "2,500+" },
        { label: "Destinations Covered", value: "80+" },
        { label: "Years of Experience", value: "10+" },
        { label: "Client Satisfaction", value: "99%" },
    ],
};
