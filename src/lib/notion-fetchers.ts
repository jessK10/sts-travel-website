import { getDatabaseFirstRow, queryDatabase } from "./notion";
import {
  mapHomeContent,
  mapAboutContent,
  mapService,
  mapContactContent,
  type HomeContent,
  type AboutContent,
  type ServiceItem,
  type ContactContent,
} from "./notion-mappers";
import { company } from "@/content/company";
import { contact } from "@/content/contact";
import { services as staticServices } from "@/content/services";

// Map static services to include 'order' field for compatibility with ServiceItem type
const fallbackServices: ServiceItem[] = staticServices.map((s, i) => ({
  ...s,
  order: i,
}));

// ─── Default Fallback Data ───────────────────────────────────────────────────
// Built from existing static content files so the site works even without Notion

const HOME_FALLBACK: HomeContent = {
  hero: {
    title: "Curated Travel Experiences",
    description: company.description,
    badge: "",
    ctaText: "Explore",
    ctaLink: "/contact",
    secondaryCtaText: "",
    secondaryCtaLink: "",
  },
  intro: {
    shortName: company.shortName,
    title: `Your Trusted Partner in Unforgettable Travel`,
    description: company.longDescription,
    image1:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
    image2:
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=2070&auto=format&fit=crop",
  },
  stats: company.stats,
};

const ABOUT_FALLBACK: AboutContent = {
  heroTitle: "The People Behind Your Perfect Trips",
  heroDescription: `Since ${company.foundedYear}, ${company.name} has been transforming travel dreams into reality with passion, expertise, and unwavering dedication.`,
  founderName: company.founderName,
  founderTitle: company.founderTitle,
  founderStory: company.founderStory,
  founderImage:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
  tagline: company.tagline,
  companyDescription: company.longDescription,
  mission: company.mission,
  vision: company.vision,
  statHighlightValue: company.stats[2]?.value || "10+",
  statHighlightLabel: company.stats[2]?.label || "Years of Excellence",
};

const CONTACT_FALLBACK: ContactContent = {
  heroTitle: "Let\u2019s Plan Your Next Journey",
  heroDescription:
    "Have a destination in mind? Want to explore your options? We'd love to hear from you. Reach out and let's start planning your memories.",
  phone: contact.phone,
  email: contact.email,
  whatsapp: contact.whatsapp,
  address: contact.address,
  city: contact.city,
  country: contact.country,
  businessHours: contact.businessHours,
};

// ─── Fetcher Functions ───────────────────────────────────────────────────────
// Each wraps the entire Notion call in try/catch so a Notion outage never
// crashes the website — it just shows the static fallback content.

/**
 * Fetches home page content from Notion.
 * Falls back to static data on any error.
 */
export async function fetchHomeContent(): Promise<HomeContent> {
  try {
    const dbId = process.env.NOTION_HOME_DB_ID?.trim();
    if (!dbId) {
      console.warn("[Notion] NOTION_HOME_DB_ID not set — using fallback data");
      return HOME_FALLBACK;
    }
    const properties = await getDatabaseFirstRow(dbId);
    return mapHomeContent(properties, HOME_FALLBACK);
  } catch (error) {
    console.error("[Notion] Failed to fetch home content:", error);
    return HOME_FALLBACK;
  }
}

/**
 * Fetches about page content from Notion.
 * Falls back to static data on any error.
 */
export async function fetchAboutContent(): Promise<AboutContent> {
  try {
    const dbId = process.env.NOTION_ABOUT_DB_ID?.trim();
    if (!dbId) {
      console.warn("[Notion] NOTION_ABOUT_DB_ID not set — using fallback data");
      return ABOUT_FALLBACK;
    }
    const properties = await getDatabaseFirstRow(dbId);
    return mapAboutContent(properties, ABOUT_FALLBACK);
  } catch (error) {
    console.error("[Notion] Failed to fetch about content:", error);
    return ABOUT_FALLBACK;
  }
}

/**
 * Fetches services list from Notion.
 * Falls back to static data on any error.
 */
export async function fetchServices(): Promise<ServiceItem[]> {
  try {
    const dbId = process.env.NOTION_SERVICES_DB_ID?.trim();
    if (!dbId) {
      console.warn("[Notion] NOTION_SERVICES_DB_ID not set — using fallback data");
      return fallbackServices;
    }
    const rows = await queryDatabase(dbId, [
      { property: "Order", direction: "ascending" },
    ]);
    if (!rows.length) {
      console.warn("[Notion] Services database is empty — using fallback data");
      return fallbackServices;
    }
    return rows.map((row, i) => mapService(row, i, fallbackServices));
  } catch (error) {
    console.error("[Notion] Failed to fetch services:", error);
    return fallbackServices;
  }
}

/**
 * Fetches contact page content from Notion.
 * Falls back to static data on any error.
 */
export async function fetchContactContent(): Promise<ContactContent> {
  try {
    const dbId = process.env.NOTION_CONTACT_DB_ID?.trim();
    if (!dbId) {
      console.warn("[Notion] NOTION_CONTACT_DB_ID not set — using fallback data");
      return CONTACT_FALLBACK;
    }
    const properties = await getDatabaseFirstRow(dbId);
    return mapContactContent(properties, CONTACT_FALLBACK);
  } catch (error) {
    console.error("[Notion] Failed to fetch contact content:", error);
    return CONTACT_FALLBACK;
  }
}
