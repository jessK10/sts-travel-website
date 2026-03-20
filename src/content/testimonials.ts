export interface Testimonial {
    id: string;
    name: string;
    role: string;
    quote: string;
    rating: number;
    destination: string;
    avatarInitials: string;
}

export const testimonials: Testimonial[] = [
    {
        id: "t1",
        name: "Priya S.",
        role: "Private Family Estate Booking",
        quote:
            "STS elevated our family vacation to a level we didn't know existed. From the private chef at our Tuscan villa to the after-hours museum access, the execution was utterly flawless and deeply personal.",
        rating: 5,
        destination: "Tuscany, Italy",
        avatarInitials: "PS",
    },
    {
        id: "t2",
        name: "Rajesh & Meena P.",
        role: "Bespoke Honeymoon Retreat",
        quote:
            "We wanted absolute seclusion and unapologetic luxury. Sarika secured an overwater reserve that isn't even listed publicly. Her attention to our privacy and comfort was nothing short of miraculous.",
        rating: 5,
        destination: "Maldives",
        avatarInitials: "RP",
    },
    {
        id: "t3",
        name: "Ananya D.",
        role: "Curated Solo Expedition",
        quote:
            "As a luxury traveler who prefers exploring alone, I rely heavily on insider knowledge and security. STS orchestrated a seamless journey through Kyoto with private geisha audiences and Michelin-starred dining. Perfection.",
        rating: 5,
        destination: "Kyoto, Japan",
        avatarInitials: "AD",
    },
    {
        id: "t4",
        name: "Vikram M.",
        role: "Executive Corporate Retreat",
        quote:
            "Our board of directors demands excellence. STS managed private jet charters, elite conference facilities, and curated team experiences with absolute discretion and precision. They are our permanent travel partners.",
        rating: 5,
        destination: "St. Moritz, Switzerland",
        avatarInitials: "VM",
    },
    {
        id: "t5",
        name: "Sunita K.",
        role: "Milestone Celebration",
        quote:
            "For our 25th anniversary, we tasked STS with surprising us. They arranged a private helicopter tour over the Amalfi Coast followed by a cliffside dinner. It redefined our standard of luxury travel.",
        rating: 5,
        destination: "Amalfi Coast, Italy",
        avatarInitials: "SK",
    },
];
