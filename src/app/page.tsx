import CTASection from "@/components/sections/CTASection";
import ParallaxBanner from "@/components/sections/ParallaxBanner";
import ServicesSection from "@/components/sections/ServicesSection";
import OffersSlider from "@/components/sections/OffersSlider";
import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialCard from "@/components/ui/TestimonialCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { testimonials } from "@/content/testimonials";
import { offers } from "@/content/offers";
import { fetchHomeContent } from "@/lib/notion-fetchers";

// Revalidate every 60 seconds so Notion edits appear within a minute
export const revalidate = 60;

// Fallback high-quality destination images for the visual grid
const destinations = [
  { id: 1, title: "Amalfi Coast, Italy", img: "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Kyoto, Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 3, title: "Santorini, Greece", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac542?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 4, title: "Maldives", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1" },
];

export default async function HomePage() {
  // Fetch editable content from Notion (falls back to static data)
  const content = await fetchHomeContent();

  return (
    <div className="bg-dark/95">
      {/* ===== 1. Curated Travel Experiences (Dynamic Offers Hero) ===== */}
      {/* Sticky Hero Container stays pinned while the rest of the page slides up */}
      <div className="sticky top-0 z-0 h-screen w-full">
        <OffersSlider offers={offers} />
      </div>

      {/* White content sheet — slides up over the sticky hero as you scroll */}
      <div className="relative z-10 bg-white rounded-t-[2rem] shadow-[0_-16px_80px_rgba(0,0,0,0.35)] -mt-[12vh] sm:-mt-[15vh] overflow-hidden pb-10">
        
        {/* Drag handle hint line (from your JSX reference) */}
        <div className="flex justify-center pt-6 pb-2">
          <div className="w-10 h-1 rounded-full bg-black/10" />
        </div>

        {/* ===== 3. Brand Introduction (Editorial Style) ===== */}
        <section className="section-padding relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <AnimatedSection className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="space-y-4 translate-y-8">
                  <div className="aspect-[3/4] rounded-sm overflow-hidden bg-gray-100 shadow-2xl">
                    <div className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: `url('${content.intro.image1}')` }} />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-sm overflow-hidden bg-gray-100 shadow-2xl">
                    <div className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: `url('${content.intro.image2}')` }} />
                  </div>
                </div>
              </div>
              {/* Decorative accent behind images */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-background-cream -z-10 rounded-full blur-[80px]" />
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2} className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-primary"></span>
                <span className="text-primary text-xs font-medium uppercase tracking-[0.3em]">
                  Welcome to {content.intro.shortName}
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-dark mb-8 leading-[1.1] tracking-tight">
                Your Trusted Partner in{" "}
                <span className="italic text-primary">Unforgettable</span> Travel
              </h2>
              <p className="text-gray-500 font-light text-lg leading-relaxed mb-10">
                {content.intro.description}
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-10 border-t border-gray-100">
                {content.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-4xl md:text-5xl font-medium text-dark mb-2">{stat.value}</p>
                    <p className="text-gray-400 text-xs uppercase tracking-[0.2em]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ===== 3. Our Services ===== */}
      <ServicesSection />

      {/* ===== 4. The STS Promise ===== */}
      <ParallaxBanner
        subtitle="The STS Promise"
        title="We don't just book trips, we plan your memories."
      />

      {/* ===== 5. Destinations Inspiration (Visual Grid) ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Destination Inspiration"
            title="Discover the Extraordinary"
            description="Peruse our handpicked selection of the world's most captivating locations, designed to inspire your next grand journey."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px] mt-12">
            {destinations.map((dest, i) => (
              <AnimatedSection
                key={dest.id}
                className={`group relative overflow-hidden rounded-sm bg-dark ${dest.span} min-h-[250px]`}
                delay={i * 0.1}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${dest.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-heading text-2xl md:text-3xl text-white font-medium mb-2 tracking-wide drop-shadow-md">
                    {dest.title}
                  </h3>
                  <span className="text-white/80 text-xs uppercase tracking-[0.2em] flex items-center gap-2 group-hover:text-white transition-colors">
                    Explore <span className="w-6 h-[1px] bg-white transform origin-left group-hover:scale-x-150 transition-transform duration-300"></span>
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. Testimonials ===== */}
      <section className="section-padding bg-background-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Client Stories"
            title="Voices of Our Travelers"
            description="Hear from the astute travelers who entrusted us to orchestrate their most cherished journeys."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. Contact CTA ===== */}
      <CTASection
        title="Ready to Begin Your Journey?"
        description="Let us craft the perfect itinerary for you. Reach out today and let your extraordinary adventure begin."
        buttonText="Get in Touch"
        buttonHref="/contact"
        variant="primary"
      />
      
      </div> {/* End of sliding content sheet */}
    </div>
  );
}
