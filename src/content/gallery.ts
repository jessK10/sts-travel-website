export interface GalleryItem {
    id: string;
    title: string;
    location: string;
    image: string;
    description: string;
    tag: string;
}

export const gallery: GalleryItem[] = [
    {
        id: "g1",
        title: "Private Seclusion",
        location: "Maldives",
        image: "/images/dest-maldives.jpg",
        description: "Wake up to the gentle lap of turquoise waters in your private overwater reserve.",
        tag: "Island Retreat",
    },
    {
        id: "g2",
        title: "Alpine Grandeur",
        location: "St. Moritz, Switzerland",
        image: "/images/dest-switzerland.jpg",
        description: "Embrace the chic elegance of snow-draped valleys and world-class alpine hospitality.",
        tag: "Winter Estate",
    },
    {
        id: "g3",
        title: "Royal Heritage",
        location: "Rajasthan, India",
        image: "/images/dest-rajasthan.jpg",
        description: "Experience the opulent legacy of maharajas with exclusive access to historic palaces.",
        tag: "Cultural Immersion",
    },
    {
        id: "g4",
        title: "Serene Sanctuaries",
        location: "Ubud, Bali",
        image: "/images/dest-bali.jpg",
        description: "Rejuvenate your spirit in bespoke jungle retreats hidden amidst lush emerald terraces.",
        tag: "Wellness",
    },
    {
        id: "g5",
        title: "Timeless Romance",
        location: "Paris, France",
        image: "/images/dest-paris.jpg",
        description: "Discover a private view of the city of light from an exclusive penthouse terrace.",
        tag: "City Escape",
    },
    {
        id: "g6",
        title: "Untamed Elegance",
        location: "Kenya",
        image: "/images/dest-kenya.jpg",
        description: "Witness the majesty of the savannah from a luxurious, private-tented safari camp.",
        tag: "Bespoke Adventure",
    },
];
