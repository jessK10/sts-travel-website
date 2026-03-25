import { sanityClient } from "./client";
import { urlFor } from "./image";
import { offers } from "@/content/offers";
import type { HeroSlide } from "./types";

const HERO_SLIDES_QUERY = `
  *[_type == "heroSlide"] | order(order asc) {
    _id,
    title,
    subtitle,
    image,
    badge,
    ctaText,
    "link": link
  }
`;

/** Raw shape returned by GROQ before image URL resolution */
interface RawHeroSlide {
  _id: string;
  title: string;
  subtitle: string;
  image: { asset: { _ref: string } } | null;
  badge?: string;
  ctaText: string;
  link: string;
  order?: number;
}

/** Fallback slides from the existing static offers data */
const fallbackSlides: HeroSlide[] = offers.map((offer) => ({
  _id: String(offer.id),
  title: offer.title,
  subtitle: offer.subtitle,
  image: offer.image,
  badge: offer.badge,
  ctaText: offer.ctaText,
  link: offer.href,
}));

/**
 * Fetches hero slides from Sanity CMS.
 * Falls back to static `offers.ts` data when CMS is unavailable
 * (e.g. placeholder project ID, no content, or network error).
 */
export async function fetchHeroSlides(): Promise<HeroSlide[]> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  // Skip Sanity fetch if not configured
  if (!projectId || projectId === "your-project-id" || projectId === "placeholder") {
    return fallbackSlides;
  }

  try {
    const raw = await sanityClient.fetch<RawHeroSlide[]>(HERO_SLIDES_QUERY);

    if (!raw || raw.length === 0) {
      return fallbackSlides;
    }

    return raw.map((slide) => ({
      _id: slide._id,
      title: slide.title,
      subtitle: slide.subtitle,
      image: slide.image
        ? urlFor(slide.image).width(1920).quality(85).url()
        : fallbackSlides[0]?.image ?? "",
      badge: slide.badge,
      ctaText: slide.ctaText,
      link: slide.link,
      order: slide.order,
    }));
  } catch {
    // Silently fall back to static data in production
    return fallbackSlides;
  }
}
