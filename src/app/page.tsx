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
import { gallery } from "@/content/gallery";

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

      {/* ===== Brand Introduction ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3 block">
                Welcome to {company.shortName}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
                Your Trusted Partner in{" "}
                <span className="text-gradient">Unforgettable Travel</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                {company.longDescription}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {company.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-8">
                      <span className="text-7xl mb-4 block">✈️</span>
                      <p className="font-heading text-2xl font-bold text-dark italic">
                        &ldquo;{company.tagline}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
                {/* Accent Card */}
                <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-2xl p-6 shadow-xl shadow-primary/20">
                  <p className="text-3xl font-bold font-heading">{company.stats[0].value}</p>
                  <p className="text-sm text-white/80">{company.stats[0].label}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== Featured Services ===== */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What We Offer"
            title="Our Premium Travel Services"
            description="From dreamy honeymoons to thrilling adventures, we offer a full spectrum of travel services tailored to your unique needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Parallax Break ===== */}
      <ParallaxBanner
        subtitle="Discover the World"
        title="Every Journey Tells a Story"
      />

      {/* ===== Why Choose Us ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Why Choose STS"
            title="The STS Difference"
            description="We go above and beyond to ensure every trip is flawless, memorable, and perfectly tailored to you."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {company.whyChooseUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100 text-center">
                  <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-dark mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Destinations / Gallery ===== */}
      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Popular Destinations"
            title="Explore Breathtaking Places"
            description="Discover the world's most captivating destinations, handpicked by our travel experts."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 0.1}>
                <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-dark/30 to-accent/40 group-hover:from-primary/60 group-hover:to-accent/60 transition-all duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3">
                      {item.tag}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-white mb-1 group-hover:translate-y-0 transition-transform">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm">{item.location}</p>
                    <p className="text-white/50 text-xs mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Client Stories"
            title="What Our Travelers Say"
            description="Hear from the hundreds of travelers who trusted us to plan their most cherished journeys."
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
        title="Ready to Plan Your Next Adventure?"
        description="Let us craft the perfect journey for you. Reach out today and let your dream trip begin."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
