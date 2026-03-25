/**
 * Sanity Studio schema for hero slides.
 *
 * Usage: Copy this into your Sanity Studio's schemas folder and
 * register it in your sanity.config.ts schemaTypes array.
 *
 * Example studio path: studio/schemas/heroSlide.ts
 */
export default {
  name: "heroSlide",
  title: "Hero Slide",
  type: "document",
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Main headline shown on the slide (e.g. 'Maldives Luxury Retreat')",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 2,
      description: "Supporting description text below the title",
    },
    {
      name: "image",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      description: "Full-screen hero background image (min. 1920×1080px recommended)",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "badge",
      title: "Badge (optional)",
      type: "string",
      description: "Small label shown above the title (e.g. 'Popular', 'New', 'Summer Deal')",
    },
    {
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      description: "Primary call-to-action button label (e.g. 'Explore Package')",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "link",
      title: "CTA Link",
      type: "string",
      description: "URL path the CTA button links to (e.g. '/contact')",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first (e.g. 1, 2, 3…)",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "badge",
      media: "image",
    },
  },
};
