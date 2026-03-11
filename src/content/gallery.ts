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
        title: "Tropical Paradise",
        location: "Maldives",
        image: "/images/dest-maldives.jpg",
        description: "Crystal-clear waters and pristine white sand beaches await in this island paradise.",
        tag: "Beach",
    },
    {
        id: "g2",
        title: "Alpine Wonders",
        location: "Switzerland",
        image: "/images/dest-switzerland.jpg",
        description: "Snow-capped mountains, scenic railways, and chocolate box villages.",
        tag: "Mountains",
    },
    {
        id: "g3",
        title: "Cultural Treasures",
        location: "Rajasthan, India",
        image: "/images/dest-rajasthan.jpg",
        description: "Royal palaces, vibrant bazaars, and centuries of heritage to explore.",
        tag: "Culture",
    },
    {
        id: "g4",
        title: "Island Bliss",
        location: "Bali, Indonesia",
        image: "/images/dest-bali.jpg",
        description: "Lush rice terraces, ancient temples, and world-class wellness retreats.",
        tag: "Wellness",
    },
    {
        id: "g5",
        title: "European Elegance",
        location: "Paris, France",
        image: "/images/dest-paris.jpg",
        description: "The city of love — iconic landmarks, exquisite cuisine, and timeless romance.",
        tag: "Romance",
    },
    {
        id: "g6",
        title: "Wild Safari",
        location: "Kenya",
        image: "/images/dest-kenya.jpg",
        description: "Witness the Great Migration and encounter Africa's Big Five up close.",
        tag: "Adventure",
    },
];
