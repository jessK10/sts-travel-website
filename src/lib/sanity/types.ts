export interface HeroSlide {
  _id: string;
  title: string;
  subtitle: string;
  /** Resolved URL string (either Sanity CDN or raw Unsplash URL fallback) */
  image: string;
  badge?: string;
  ctaText: string;
  link: string;
  order?: number;
}
