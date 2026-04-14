import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CTABanner from "@/components/sections/CTABanner";
import { SERVICES } from "@/lib/constants";

// =============================================================================
// Services Page — Overview of all 4 service categories
// =============================================================================

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive financial services including Wealth Management, Tax Consultancy, GST Advisory & Compliance, and Business Consulting from Unovia Consulting.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-50/50 to-white" />
        <div className="relative container-tight px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-600 mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 leading-tight tracking-tight mb-6">
              Financial Excellence,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">
                Delivered
              </span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Four pillars of expertise working together to protect, grow, and transform
              your financial future.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white pt-0">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                shortDescription={service.shortDescription}
                icon={service.icon}
                color={service.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Why Unovia"
            title="What Sets Us Apart"
            subtitle="Our approach combines deep domain expertise with personalized service to deliver measurable results."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Specialized Expertise",
                desc: "Each practice is led by domain experts with 15+ years of hands-on experience in their respective fields.",
                number: "01",
              },
              {
                title: "Integrated Approach",
                desc: "Our services don't operate in silos. Tax, wealth, GST, and business strategies are coordinated for maximum impact.",
                number: "02",
              },
              {
                title: "Proven Track Record",
                desc: "500+ satisfied clients, 98% retention rate, and measurable outcomes that speak for themselves.",
                number: "03",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:border-gold-200 transition-all duration-300"
              >
                <span className="text-6xl font-black text-navy-50 absolute top-4 right-6">
                  {item.number}
                </span>
                <h3 className="relative text-lg font-bold text-navy-800 mb-3 mt-8">
                  {item.title}
                </h3>
                <p className="relative text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
