import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CTABanner from "@/components/sections/CTABanner";
import { SERVICES } from "@/lib/constants";

import WhatSetsUsApart from "@/components/sections/WhatSetsUsApart";

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

      {/* What Sets Us Apart */}
      <WhatSetsUsApart />

      <CTABanner />
    </>
  );
}
