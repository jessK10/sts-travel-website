export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    heroImage: string;
    icon: string;
    includedItems: string[];
    benefits: string[];
    processSteps: { step: number; title: string; description: string }[];
    targetAudience: string[];
    ctaText: string;
}

export const services: Service[] = [
    {
        slug: "honeymoon-packages",
        title: "Honeymoon Packages",
        shortDescription:
            "Begin your forever with a romantic escape to the world's most enchanting destinations.",
        fullDescription:
            "Your love story deserves a breathtaking backdrop. Our honeymoon packages are thoughtfully curated to offer the perfect blend of romance, luxury, and adventure. From overwater villas in the Maldives to cozy chalets in the Swiss Alps, we create intimate experiences that celebrate your new journey together. Every detail — from candlelit dinners to private excursions — is designed to make your honeymoon truly unforgettable.",
        heroImage: "/images/honeymoon-hero.jpg",
        icon: "💕",
        includedItems: [
            "Luxury resort or villa accommodation",
            "Romantic dining experiences",
            "Private transfers and airport pickups",
            "Couple spa and wellness sessions",
            "Sunset cruises or private tours",
            "Personalized welcome amenities",
            "24/7 concierge support",
        ],
        benefits: [
            "Completely stress-free planning",
            "Handpicked romantic destinations",
            "Exclusive honeymoon perks and upgrades",
            "Flexible itineraries tailored to your pace",
            "Privacy and exclusivity guaranteed",
        ],
        processSteps: [
            {
                step: 1,
                title: "Share Your Vision",
                description:
                    "Tell us about your dream honeymoon — preferred destinations, activities, budget, and travel dates.",
            },
            {
                step: 2,
                title: "Custom Proposal",
                description:
                    "We design a bespoke itinerary with handpicked accommodations, experiences, and romantic touches.",
            },
            {
                step: 3,
                title: "Refine & Confirm",
                description:
                    "Review the plan, request adjustments, and confirm once everything is perfect.",
            },
            {
                step: 4,
                title: "Travel & Enjoy",
                description:
                    "Embark on your honeymoon with complete peace of mind while we handle every detail.",
            },
        ],
        targetAudience: [
            "Newlywed couples",
            "Couples celebrating anniversaries",
            "Partners seeking a romantic getaway",
        ],
        ctaText: "Plan Your Dream Honeymoon",
    },
    {
        slug: "family-holidays",
        title: "Family Holidays",
        shortDescription:
            "Create joyful memories with your loved ones on a perfectly planned family vacation.",
        fullDescription:
            "Family vacations are where lifelong memories are made. Our family holiday packages cater to every generation — from adventurous kids to relaxing grandparents. We select family-friendly resorts, plan engaging activities for all ages, and ensure seamless logistics so you can focus on what matters most: quality time together. Whether it's a beach holiday, a cultural exploration, or a theme park adventure, we make it magical for everyone.",
        heroImage: "/images/family-hero.jpg",
        icon: "👨‍👩‍👧‍👦",
        includedItems: [
            "Family-friendly hotel or resort stays",
            "Kid-friendly activity planning",
            "Private airport transfers",
            "Multi-generational activity options",
            "Travel insurance assistance",
            "Local guides and recommendations",
            "Flexible meal plans",
        ],
        benefits: [
            "Activities for every age group",
            "Safe and vetted accommodations",
            "No-stress itinerary management",
            "Budget-friendly options available",
            "Support for special dietary or accessibility needs",
        ],
        processSteps: [
            {
                step: 1,
                title: "Tell Us About Your Family",
                description:
                    "Share details about your family — ages, interests, any special requirements, and preferred destinations.",
            },
            {
                step: 2,
                title: "Curated Itinerary",
                description:
                    "We create a balanced itinerary with adventures, relaxation, and family bonding activities.",
            },
            {
                step: 3,
                title: "Review & Customize",
                description:
                    "Fine-tune the plan until it's perfect for every family member.",
            },
            {
                step: 4,
                title: "Travel Together",
                description:
                    "Set off on your family adventure with everything arranged and ready.",
            },
        ],
        targetAudience: [
            "Families with children",
            "Multi-generational travel groups",
            "Parents planning school holiday trips",
        ],
        ctaText: "Plan Your Family Getaway",
    },
    {
        slug: "group-tours",
        title: "Group Tours",
        shortDescription:
            "Explore together with friends, clubs, or colleagues on an expertly organized group tour.",
        fullDescription:
            "Group travel is all about shared experiences and collective adventure. Whether it's a friends' reunion, a college trip, or a community pilgrimage, our group tour packages are designed to keep everyone engaged, comfortable, and happy. We handle the complex logistics of group travel — coordinating schedules, bulk bookings, special needs — so you can simply enjoy the journey with your people.",
        heroImage: "/images/group-hero.jpg",
        icon: "👥",
        includedItems: [
            "Group accommodation bookings",
            "Chartered or group transport",
            "Guided tours with multilingual guides",
            "Group activities and excursions",
            "Dedicated group coordinator",
            "Special group dining arrangements",
            "Customizable add-ons per participant",
        ],
        benefits: [
            "Cost savings through group rates",
            "One point of contact for the entire group",
            "Flexible itineraries for diverse interests",
            "Professional handling of large-group logistics",
            "Memorable shared experiences",
        ],
        processSteps: [
            {
                step: 1,
                title: "Tell Us About Your Group",
                description:
                    "Share your group size, demographics, interests, and travel goals.",
            },
            {
                step: 2,
                title: "Custom Group Plan",
                description:
                    "We design an itinerary that balances group activities with free-time options.",
            },
            {
                step: 3,
                title: "Coordinate & Confirm",
                description:
                    "We manage registrations, payments, and logistics for the entire group.",
            },
            {
                step: 4,
                title: "Travel Together",
                description:
                    "Set off on your group adventure with dedicated on-ground support.",
            },
        ],
        targetAudience: [
            "Friend groups",
            "Clubs and communities",
            "College or school trips",
            "Religious or pilgrimage groups",
        ],
        ctaText: "Organize Your Group Tour",
    },
    {
        slug: "corporate-travel",
        title: "Corporate Travel",
        shortDescription:
            "Professional travel management for business trips, conferences, and corporate retreats.",
        fullDescription:
            "Business travel requires precision, efficiency, and reliability. Our corporate travel solutions cater to companies of all sizes — from solo business trips to large-scale conferences and incentive retreats. We negotiate the best corporate rates, manage complex itineraries, and provide dedicated account management to ensure your team travels productively and comfortably.",
        heroImage: "/images/corporate-hero.jpg",
        icon: "💼",
        includedItems: [
            "Flight and hotel bookings at corporate rates",
            "Meeting and conference venue sourcing",
            "Corporate retreat planning",
            "Executive transfer services",
            "Travel policy compliance support",
            "Visa and documentation assistance",
            "Expense reporting integration",
        ],
        benefits: [
            "Reduced travel costs through corporate rates",
            "Centralized booking and reporting",
            "Dedicated corporate account manager",
            "Policy-compliant travel arrangements",
            "Reliable 24/7 business travel support",
        ],
        processSteps: [
            {
                step: 1,
                title: "Understand Requirements",
                description:
                    "We learn about your company's travel needs, policies, and budget guidelines.",
            },
            {
                step: 2,
                title: "Tailored Solutions",
                description:
                    "We present travel options that meet your corporate standards and budget.",
            },
            {
                step: 3,
                title: "Book & Manage",
                description:
                    "We handle all bookings, changes, and logistics with minimal disruption.",
            },
            {
                step: 4,
                title: "Ongoing Partnership",
                description:
                    "Continuous optimization of your travel program based on feedback and data.",
            },
        ],
        targetAudience: [
            "Businesses and corporations",
            "HR and admin teams",
            "Event managers",
            "Executive assistants",
        ],
        ctaText: "Get Corporate Travel Solutions",
    },
    {
        slug: "luxury-escapes",
        title: "Luxury Escapes",
        shortDescription:
            "Indulge in the finest travel experiences with our exclusive luxury getaway packages.",
        fullDescription:
            "For those who seek the extraordinary, our luxury escape packages deliver unparalleled travel experiences. Stay in the world's most prestigious hotels, dine at Michelin-starred restaurants, enjoy private yacht charters, and receive VIP treatment at every turn. We curate every element to reflect sophistication, comfort, and exclusivity — because you deserve nothing less than the best.",
        heroImage: "/images/luxury-hero.jpg",
        icon: "👑",
        includedItems: [
            "5-star and boutique luxury accommodations",
            "First-class or business-class flights",
            "Private chauffeur and yacht services",
            "Exclusive dining reservations",
            "VIP event and attraction access",
            "Personal travel butler or concierge",
            "Premium travel insurance",
        ],
        benefits: [
            "Uncompromised luxury at every touchpoint",
            "Access to exclusive experiences and venues",
            "Discreet and personalized service",
            "Flexible last-minute arrangements",
            "World-class safety and comfort standards",
        ],
        processSteps: [
            {
                step: 1,
                title: "Define Your Luxury",
                description:
                    "Share your vision of the perfect luxury escape — style, destinations, and special wishes.",
            },
            {
                step: 2,
                title: "Exclusive Proposal",
                description:
                    "We present a bespoke luxury itinerary with premium options and VIP touches.",
            },
            {
                step: 3,
                title: "Perfect Every Detail",
                description:
                    "Refine the plan until every element matches your expectations for excellence.",
            },
            {
                step: 4,
                title: "Experience Luxury",
                description:
                    "Travel in absolute style with our white-glove service from start to finish.",
            },
        ],
        targetAudience: [
            "High-net-worth travelers",
            "Couples seeking premium romance",
            "Milestone celebration travelers",
            "Luxury lifestyle enthusiasts",
        ],
        ctaText: "Book Your Luxury Escape",
    },
    {
        slug: "adventure-travel",
        title: "Adventure Travel",
        shortDescription:
            "Fuel your adrenaline with thrilling adventure trips to the world's most exciting destinations.",
        fullDescription:
            "For the bold and the curious, our adventure travel packages take you off the beaten path and into the heart of nature's most thrilling landscapes. Trek through Himalayan trails, dive into coral reefs, safari across African plains, or conquer volcanic peaks — all with expert guides, safety-first planning, and the spirit of exploration. Every adventure is designed to push your boundaries while keeping you safe and supported.",
        heroImage: "/images/adventure-hero.jpg",
        icon: "🏔️",
        includedItems: [
            "Professional adventure guides",
            "Safety equipment and briefings",
            "Adventure-friendly accommodations",
            "Activity bookings (trekking, diving, rafting, etc.)",
            "Travel and adventure insurance",
            "Local transport and transfers",
            "Photography/videography options",
        ],
        benefits: [
            "Expert-led adventures with safety focus",
            "Unique off-the-beaten-path experiences",
            "All skill levels welcome",
            "Eco-conscious and sustainable practices",
            "Unforgettable stories to tell",
        ],
        processSteps: [
            {
                step: 1,
                title: "Choose Your Adventure",
                description:
                    "Tell us what excites you — mountains, oceans, jungles, deserts — and your fitness level.",
            },
            {
                step: 2,
                title: "Custom Adventure Plan",
                description:
                    "We design an adventure itinerary that matches your thrill level and comfort needs.",
            },
            {
                step: 3,
                title: "Prepare & Brief",
                description:
                    "Receive preparation guides, packing lists, and safety briefings before departure.",
            },
            {
                step: 4,
                title: "Embark & Explore",
                description:
                    "Set off on your adventure with experienced guides and full support.",
            },
        ],
        targetAudience: [
            "Thrill-seekers and outdoor enthusiasts",
            "Solo adventurers",
            "Friend groups seeking excitement",
            "Nature and wildlife lovers",
        ],
        ctaText: "Start Your Adventure",
    },
];
