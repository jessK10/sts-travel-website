export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  icon: string;
}

export const services: Service[] = [
  { id: "1", slug: "hotel-booking", title: "Hotel Booking", description: "Handpicked luxury stays and boutique hotels tailored to your comfort and style.", iconName: "Hotel", icon: "🏨" },
  { id: "2", slug: "domestic-international-tour", title: "Domestic / International Tour", description: "Curated tour packages across India and the world — crafted for every kind of traveller.", iconName: "Globe", icon: "🌍" },
  { id: "3", slug: "air-ticket-visa", title: "Air Ticket / Visa", description: "Hassle-free flight reservations and end-to-end visa assistance for any destination.", iconName: "Plane", icon: "✈️" },
  { id: "4", slug: "passport-forex", title: "Passport / Forex", description: "Swift passport services and competitive forex rates to keep your journey seamless.", iconName: "BookOpen", icon: "🛂" },
  { id: "5", slug: "car-rental", title: "Car Rental", description: "Premium chauffeur-driven and self-drive rentals for intercity or local travel.", iconName: "Car", icon: "🚗" },
  { id: "6", slug: "overseas-insurance", title: "Overseas Insurance", description: "Comprehensive travel insurance plans so you explore the world with complete peace of mind.", iconName: "ShieldCheck", icon: "🛡️" },
  { id: "7", slug: "mice", title: "M.I.C.E.", description: "Meetings, incentives, conferences & exhibitions — planned and executed flawlessly.", iconName: "CalendarRange", icon: "📅" },
  { id: "8", slug: "fit-git-booking", title: "FIT / GIT Booking", description: "Flexible individual and group itineraries designed around your schedule and preferences.", iconName: "Users", icon: "👥" },
];
