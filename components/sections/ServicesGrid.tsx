import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/constants";

// =============================================================================
// ServicesGrid — 2x2 grid of service cards on the home page
// =============================================================================

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-gray-50/50" id="services-section">
      <div className="container-tight">
        <SectionHeading
          eyebrow="What We Do"
          title="Comprehensive Financial & Business Advisory"
          subtitle="Four pillars of expertise working together to protect, grow, and transform your financial future."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
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
  );
}
