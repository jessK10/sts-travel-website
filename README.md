# STS – Sarika's Travel Solutions

> **"We plan your memories"**

A premium, production-quality travel agency website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and GSAP.

---

## Tech Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** for styling
- **Framer Motion** for scroll-triggered animations
- **GSAP + ScrollTrigger** for parallax effects
- Content centralized in TypeScript files (CMS-ready)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Navbar + Footer)
│   ├── page.tsx                  # Home page
│   ├── about/page.tsx            # About page
│   ├── contact/page.tsx          # Contact page
│   ├── services/
│   │   ├── page.tsx              # Services overview
│   │   └── [slug]/page.tsx       # Dynamic service detail page
│   └── globals.css               # Global styles & Tailwind theme
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky transparent navbar
│   │   └── Footer.tsx            # Site footer
│   ├── sections/
│   │   ├── HeroSection.tsx       # Full-screen hero with parallax
│   │   ├── CTASection.tsx        # Call-to-action banner
│   │   ├── ParallaxBanner.tsx    # GSAP parallax image section
│   │   └── ContactForm.tsx       # Contact form with validation
│   └── ui/
│       ├── AnimatedSection.tsx   # Framer Motion scroll reveal wrapper
│       ├── SectionHeader.tsx     # Reusable section title component
│       ├── ServiceCard.tsx       # Service card with hover effects
│       └── TestimonialCard.tsx   # Testimonial card component
│
├── content/                      # ✏️ EDITABLE CONTENT (see below)
│   ├── company.ts                # Brand info, stats, values
│   ├── services.ts               # All service definitions
│   ├── testimonials.ts           # Client testimonials
│   ├── navigation.ts             # Nav links & CTA button
│   ├── contact.ts                # Contact info & social links
│   └── gallery.ts                # Destination highlights
│
└── public/
    └── logo.png                  # Company logo
```

---

## ✏️ How to Edit Website Content

All website content lives in the `src/content/` folder. **You do NOT need to touch any component files to change text, add services, or update contact info.**

### Company Info (`src/content/company.ts`)

Edit brand name, tagline, description, founder story, mission, vision, values, stats, and "why choose us" items:

```typescript
export const company = {
  name: "STS – Sarika's Travel Solutions",
  tagline: "We plan your memories",
  description: "Your new description here...",
  // ... edit any field
};
```

### Services (`src/content/services.ts`)

Each service is an object with these fields:

| Field | Description |
|-------|-------------|
| `slug` | URL path (e.g., `"honeymoon-packages"` → `/services/honeymoon-packages`) |
| `title` | Display name |
| `shortDescription` | Card preview text |
| `fullDescription` | Full service page description |
| `icon` | Emoji icon for the card |
| `includedItems` | Array of what's included |
| `benefits` | Array of benefit strings |
| `processSteps` | Array of `{ step, title, description }` |
| `targetAudience` | Array of audience descriptions |
| `ctaText` | Call-to-action button text |

**To add a new service**, just add a new object to the array. The service page will be auto-generated.

**To remove a service**, delete its object from the array.

### Testimonials (`src/content/testimonials.ts`)

Add or edit testimonials:

```typescript
{
  id: "t6",
  name: "Client Name",
  role: "Trip Type",
  quote: "Their review text...",
  rating: 5,
  destination: "Destination Name",
  avatarInitials: "CN",
}
```

### Contact Info (`src/content/contact.ts`)

Update phone, email, WhatsApp, address, business hours, and social media links.

### Navigation (`src/content/navigation.ts`)

Edit menu links and the CTA button text/URL.

### Destinations Gallery (`src/content/gallery.ts`)

Add or edit destination highlights shown on the homepage.

---

## Replacing Images

1. Place new images in the `public/images/` folder
2. Update the `heroImage` field in `src/content/services.ts` to reference the new path
3. Replace `public/logo.png` with the real client logo

---

## Future CMS Integration

The content layer is designed to be swapped with a CMS like Sanity:

1. Replace static imports with CMS fetch calls
2. The TypeScript interfaces in each content file serve as your schema
3. Components remain unchanged — they accept the same data shape

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, intro, services, parallax, why-us, destinations, testimonials, CTA |
| `/about` | Company story, founder, mission, values, stats |
| `/services` | Grid of all services |
| `/services/[slug]` | Individual service detail page |
| `/contact` | Contact form, business info, map placeholder |

---

## License

Private project for STS – Sarika's Travel Solutions. All rights reserved.
