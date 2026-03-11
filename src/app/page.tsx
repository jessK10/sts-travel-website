import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import ParallaxBanner from "@/components/sections/ParallaxBanner";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { company } from "@/content/company";
import { services } from "@/content/services";
import { testimonials } from "@/content/testimonials";

// Fallback high-quality destination images for the visual grid
const destinations = [
  { id: 1, title: "Amalfi Coast, Italy", img: "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Kyoto, Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 3, title: "Santorini, Greece", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac542?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 4, title: "Maldives", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1" },
];

export default function HomePage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <HeroSection
        subtitle={company.tagline}
        title="Craft Your Perfect Journey With Us"
        description={company.description}
        ctaPrimary={{ label: "Start Planning", href: "/contact" }}
        ctaSecondary={{ label: "Our Services", href: "/services" }}
      />

      {/* ===== Brand Introduction (Editorial Style) ===== */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <AnimatedSection className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="space-y-4 translate-y-8">
                  <div className="aspect-[3/4] rounded-sm overflow-hidden bg-gray-100 shadow-2xl">
                    <div className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')" }} />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-sm overflow-hidden bg-gray-100 shadow-2xl">
                    <div className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=2070&auto=format&fit=crop')" }} />
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
                  Welcome to {company.shortName}
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-dark mb-8 leading-[1.1] tracking-tight">
                Your Trusted Partner in{" "}
                <span className="italic text-primary">Unforgettable</span> Travel
              </h2>
              <p className="text-gray-500 font-light text-lg leading-relaxed mb-10">
                {company.longDescription}
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-10 border-t border-gray-100">
                {company.stats.map((stat) => (
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

      {/* ===== Featured Services ===== */}
      <section className="section-padding bg-background-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Curated Experiences"
            title="Our Premium Services"
            description="From dreamy honeymoons to thrilling adventures, we offer a full spectrum of travel services tailored solely to your unique desires."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {services.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <a href="/services" className="inline-flex items-center gap-3 px-8 py-3 text-sm uppercase tracking-[0.15em] font-medium text-dark border border-dark hover:bg-dark hover:text-white transition-all duration-300">
              Explore All Services
            </a>
          </div>
        </div>
      </section>

      {/* ===== Parallax Break ===== */}
      <ParallaxBanner
        subtitle="The STS Promise"
        title="We don't just book trips, we plan your memories."
      />

      {/* ===== Destinations Inspiration (Visual Grid) ===== */}
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

      {/* ===== Testimonials ===== */}
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

      {/* ===== Contact CTA ===== */}
      <CTASection
        title="Ready to Begin Your Journey?"
        description="Let us craft the perfect itinerary for you. Reach out today and let your extraordinary adventure begin."
        buttonText="Get in Touch"
        buttonHref="/contact"
        variant="primary"
      />
    </>
  );
}
