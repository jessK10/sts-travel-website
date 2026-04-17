import { getPlainText, getUrl, getPhone, getEmail } from "./notion";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface HomeContent {
  hero: {
    title: string;
    description: string;
    badge?: string;
    ctaText?: string;
    ctaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
  };
  intro: {
    shortName: string;
    title: string;
    description: string;
    image1: string;
    image2: string;
  };
  stats: { label: string; value: string }[];
}

export interface AboutContent {
  heroTitle: string;
  heroDescription: string;
  founderName: string;
  founderTitle: string;
  founderStory: string;
  founderImage: string;
  tagline: string;
  companyDescription: string;
  mission: string;
  vision: string;
  statHighlightValue: string;
  statHighlightLabel: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  icon: string;
  order: number;
}

export interface ContactContent {
  heroTitle: string;
  heroDescription: string;
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  city: string;
  country: string;
  businessHours: string;
}

// ─── Mappers ─────────────────────────────────────────────────────────────────

/**
 * Maps a single Notion database row into HomeContent.
 * All fields have safe defaults.
 */
export function mapHomeContent(
  properties: Record<string, any> | null,
  fallback: HomeContent
): HomeContent {
  if (!properties) return fallback;

  return {
    hero: {
      title: getPlainText(properties["Hero Title"], fallback.hero.title),
      description: getPlainText(
        properties["Hero Description"],
        fallback.hero.description
      ),
      badge: getPlainText(properties["Hero Badge"], fallback.hero.badge || ""),
      ctaText: getPlainText(
        properties["Hero CTA Text"],
        fallback.hero.ctaText || ""
      ),
      ctaLink: getUrl(
        properties["Hero CTA Link"],
        fallback.hero.ctaLink || ""
      ),
      secondaryCtaText: getPlainText(
        properties["Secondary CTA Text"],
        fallback.hero.secondaryCtaText || ""
      ),
      secondaryCtaLink: getUrl(
        properties["Secondary CTA Link"],
        fallback.hero.secondaryCtaLink || ""
      ),
    },
    intro: {
      shortName: getPlainText(
        properties["Intro Short Name"],
        fallback.intro.shortName
      ),
      title: getPlainText(properties["Intro Title"], fallback.intro.title),
      description: getPlainText(
        properties["Intro Description"],
        fallback.intro.description
      ),
      image1: getUrl(properties["Intro Image 1"], fallback.intro.image1),
      image2: getUrl(properties["Intro Image 2"], fallback.intro.image2),
    },
    stats: [
      {
        value: getPlainText(
          properties["Stat 1 Value"],
          fallback.stats[0]?.value || ""
        ),
        label: getPlainText(
          properties["Stat 1 Label"],
          fallback.stats[0]?.label || ""
        ),
      },
      {
        value: getPlainText(
          properties["Stat 2 Value"],
          fallback.stats[1]?.value || ""
        ),
        label: getPlainText(
          properties["Stat 2 Label"],
          fallback.stats[1]?.label || ""
        ),
      },
      {
        value: getPlainText(
          properties["Stat 3 Value"],
          fallback.stats[2]?.value || ""
        ),
        label: getPlainText(
          properties["Stat 3 Label"],
          fallback.stats[2]?.label || ""
        ),
      },
      {
        value: getPlainText(
          properties["Stat 4 Value"],
          fallback.stats[3]?.value || ""
        ),
        label: getPlainText(
          properties["Stat 4 Label"],
          fallback.stats[3]?.label || ""
        ),
      },
    ].filter((s) => s.value && s.label), // Remove empty stats
  };
}

/**
 * Maps a single Notion database row into AboutContent.
 */
export function mapAboutContent(
  properties: Record<string, any> | null,
  fallback: AboutContent
): AboutContent {
  if (!properties) return fallback;

  return {
    heroTitle: getPlainText(properties["Hero Title"], fallback.heroTitle),
    heroDescription: getPlainText(
      properties["Hero Description"],
      fallback.heroDescription
    ),
    founderName: getPlainText(
      properties["Founder Name"],
      fallback.founderName
    ),
    founderTitle: getPlainText(
      properties["Founder Title"],
      fallback.founderTitle
    ),
    founderStory: getPlainText(
      properties["Founder Story"],
      fallback.founderStory
    ),
    founderImage: getUrl(properties["Founder Image"], fallback.founderImage),
    tagline: getPlainText(properties["Tagline"], fallback.tagline),
    companyDescription: getPlainText(
      properties["Company Description"],
      fallback.companyDescription
    ),
    mission: getPlainText(properties["Mission"], fallback.mission),
    vision: getPlainText(properties["Vision"], fallback.vision),
    statHighlightValue: getPlainText(
      properties["Stat Highlight Value"],
      fallback.statHighlightValue
    ),
    statHighlightLabel: getPlainText(
      properties["Stat Highlight Label"],
      fallback.statHighlightLabel
    ),
  };
}

/**
 * Maps a Notion database row into a ServiceItem.
 */
export function mapService(
  page: any,
  index: number,
  fallbackServices: ServiceItem[]
): ServiceItem {
  const properties = page.properties || {};
  const fb = fallbackServices[index] || {
    id: String(index + 1),
    slug: "",
    title: "",
    description: "",
    iconName: "Globe",
    icon: "🌍",
    order: index,
  };

  return {
    id: page.id || fb.id,
    slug: getPlainText(properties["Slug"], fb.slug),
    title: getPlainText(properties["Name"], fb.title),
    description: getPlainText(properties["Description"], fb.description),
    iconName: getPlainText(properties["Icon Name"], fb.iconName),
    icon: getPlainText(properties["Icon"], fb.icon),
    order: index,
  };
}

/**
 * Maps a single Notion database row into ContactContent.
 */
export function mapContactContent(
  properties: Record<string, any> | null,
  fallback: ContactContent
): ContactContent {
  if (!properties) return fallback;

  return {
    heroTitle: getPlainText(properties["Hero Title"], fallback.heroTitle),
    heroDescription: getPlainText(
      properties["Hero Description"],
      fallback.heroDescription
    ),
    phone: getPhone(properties["Phone"], fallback.phone),
    email: getEmail(properties["Email"], fallback.email),
    whatsapp: getPlainText(properties["WhatsApp"], fallback.whatsapp),
    address: getPlainText(properties["Address"], fallback.address),
    city: getPlainText(properties["City"], fallback.city),
    country: getPlainText(properties["Country"], fallback.country),
    businessHours: getPlainText(
      properties["Business Hours"],
      fallback.businessHours
    ),
  };
}
