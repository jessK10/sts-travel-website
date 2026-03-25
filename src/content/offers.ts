export interface Offer {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
  ctaText: string;
  href: string;
}

export const offers: Offer[] = [
  {
    id: 1,
    slug: "europe-summer-escape",
    title: "Europe Summer Escape",
    subtitle:
      "Explore the romance of Paris, the coasts of Amalfi, and the charm of Barcelona in one unforgettable journey.",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop",
    badge: "Summer Deal",
    ctaText: "Explore Package",
    href: "/contact",
  },
  {
    id: 2,
    slug: "maldives-luxury-retreat",
    title: "Maldives Luxury Retreat",
    subtitle:
      "Crystal-clear waters, overwater villas, and world-class dining — your private paradise awaits.",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop",
    badge: "Popular",
    ctaText: "View Details",
    href: "/contact",
  },
  {
    id: 3,
    slug: "japan-discovery-tour",
    title: "Japan Discovery Tour",
    subtitle:
      "From the temples of Kyoto to the neon glow of Tokyo — immerse yourself in a culture like no other.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
    badge: "New",
    ctaText: "Discover More",
    href: "/contact",
  },
  {
    id: 4,
    slug: "rajasthan-heritage-trail",
    title: "Rajasthan Heritage Trail",
    subtitle:
      "Walk through royal palaces, golden deserts, and vibrant markets on India's most iconic trail.",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop",
    ctaText: "Plan Your Trip",
    href: "/contact",
  },
  {
    id: 5,
    slug: "swiss-alps-adventure",
    title: "Swiss Alps Adventure",
    subtitle:
      "Breathtaking mountain panoramas, luxury chalets, and unforgettable alpine experiences.",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop",
    badge: "Limited Offer",
    ctaText: "Book Now",
    href: "/contact",
  },
  {
    id: 6,
    slug: "bali-wellness-escape",
    title: "Bali Wellness Escape",
    subtitle:
      "Rejuvenate your body and soul with luxury spa retreats, lush rice terraces, and serene sunsets.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop",
    ctaText: "Explore Offer",
    href: "/contact",
  },
];
