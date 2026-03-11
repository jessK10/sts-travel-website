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
        name: "Priya Sharma",
        role: "Family Vacation",
        quote:
            "STS made our family trip to Bali absolutely magical. Every detail was taken care of — from the beautiful villa to curated local experiences. The kids had the time of their lives!",
        rating: 5,
        destination: "Bali, Indonesia",
        avatarInitials: "PS",
    },
    {
        id: "t2",
        name: "Rajesh & Meena Patel",
        role: "Honeymoon Trip",
        quote:
            "Our honeymoon in the Maldives was a dream come true thanks to Sarika. The private island resort, sunset cruises, and surprise arrangements made it unforgettable.",
        rating: 5,
        destination: "Maldives",
        avatarInitials: "RP",
    },
    {
        id: "t3",
        name: "Ananya Desai",
        role: "Solo Traveler",
        quote:
            "As a solo female traveler, safety was my priority. STS planned a seamless Europe trip with perfect accommodations and local guides. I felt supported every step of the way.",
        rating: 5,
        destination: "Europe Multi-City",
        avatarInitials: "AD",
    },
    {
        id: "t4",
        name: "Vikram Malhotra",
        role: "Corporate Retreat",
        quote:
            "Organized a 30-person corporate retreat through STS and it was flawless. The team-building activities, venue, and logistics were handled with absolute professionalism.",
        rating: 5,
        destination: "Goa, India",
        avatarInitials: "VM",
    },
    {
        id: "t5",
        name: "Sunita Kapoor",
        role: "Anniversary Trip",
        quote:
            "Sarika understood exactly what we wanted for our 25th anniversary. The Swiss Alps experience was breathtaking and every surprise she planned brought tears of joy.",
        rating: 5,
        destination: "Switzerland",
        avatarInitials: "SK",
    },
];
