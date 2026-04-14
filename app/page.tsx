import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TrustIndicators from "@/components/sections/TrustIndicators";
import Testimonials from "@/components/sections/Testimonials";
import InsightsPreview from "@/components/sections/InsightsPreview";
import CTABanner from "@/components/sections/CTABanner";

// =============================================================================
// Home Page — Landing page assembling all major sections
// =============================================================================

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <TrustIndicators />
      <Testimonials />
      <InsightsPreview />
      <CTABanner />
    </>
  );
}
