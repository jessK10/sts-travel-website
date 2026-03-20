export interface Service {
  slug: string;
  title: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: "hotel-booking",
    title: "Hotel Booking",
    icon: "🏨",
  },
  {
    slug: "domestic-international-tour",
    title: "Domestic / International Tour",
    icon: "🌍",
  },
  {
    slug: "air-ticket-visa",
    title: "Air Ticket / Visa",
    icon: "✈️",
  },
  {
    slug: "passport-forex",
    title: "Passport / Forex",
    icon: "🛂",
  },
  {
    slug: "car-rental",
    title: "Car Rental",
    icon: "🚗",
  },
  {
    slug: "overseas-insurance",
    title: "Overseas Insurance",
    icon: "🛡️",
  },
  {
    slug: "mice",
    title: "M.I.C.E.",
    icon: "🎪",
  },
  {
    slug: "fit-git-booking",
    title: "FIT / GIT Booking",
    icon: "📋",
  },
];
