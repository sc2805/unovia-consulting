import SectionHeading from "@/components/ui/SectionHeading";
import { Award, Layers, UserCheck, TrendingUp, CheckCircle2 } from "lucide-react";

export const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Specialized Expertise",
    badge: "CA-Led Advisory",
    icon: Award,
    description:
      "Each practice area—Wealth Management, Tax Consultancy, GST Advisory, and Business Consulting—is backed by a 7+ year proven track record serving multiple individual and corporate clients.",
    highlights: [
      "7+ years proven track record serving multiple clients",
      "Institutional-grade financial & regulatory rigour",
      "Proactive monitoring of legislative tax changes",
      "Zero-compromise accuracy and compliance standards",
    ],
  },
  {
    number: "02",
    title: "Integrated 360° Strategy",
    badge: "Holistic Synergy",
    icon: Layers,
    description:
      "Our services don't operate in isolated silos. Tax planning, wealth management, GST compliance, and corporate advisory are synchronized for maximum impact.",
    highlights: [
      "Cross-disciplinary team collaboration",
      "Single point of contact for all advisory needs",
      "Elimination of conflicting advice and tax leaks",
      "Seamless alignment between personal and business wealth",
    ],
  },
  {
    number: "03",
    title: "Personalized & Client-Centric",
    badge: "Custom Roadmaps",
    icon: UserCheck,
    description:
      "We reject off-the-shelf financial products. Every strategy is custom-built around your specific life goals, risk tolerance, and tax profile.",
    highlights: [
      "Tailored goal-based financial architecture",
      "Dedicated relationship manager & CA consultation",
      "Unbiased, objective advisory without product bias",
      "Regular strategy reviews and portfolio rebalancing",
    ],
  },
  {
    number: "04",
    title: "Proven Track Record",
    badge: "Measurable Impact",
    icon: TrendingUp,
    description:
      "We measure our performance by the tangible wealth created and tax optimized for our clients over long-term multi-generational partnerships.",
    highlights: [
      "500+ satisfied individual and corporate clients",
      "7+ years of sustained client retention and trust",
      "Multi-crore verified tax savings delivered",
      "Transparent reporting with clear performance metrics",
    ],
  },
];

export default function WhatSetsUsApart() {
  return (
    <section id="what-sets-us-apart" className="section-padding bg-gray-50/50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container-tight relative z-10">
        <SectionHeading
          eyebrow="Why Unovia"
          title="What Sets Us Apart"
          subtitle="Our approach combines deep domain expertise with personalized service to deliver measurable results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {DIFFERENTIATORS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-gold-300 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Header Row */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-navy-800 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-gold-600 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
                        {item.badge}
                      </span>
                      <span className="text-4xl font-black text-navy-100 group-hover:text-gold-200 transition-colors duration-300 select-none">
                        {item.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-navy-800 mb-3 group-hover:text-navy-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-6 border-t border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-700 mb-3">
                    Key Deliverables & Details:
                  </h4>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Callout Banner */}
        <div className="mt-12 bg-navy-900 rounded-2xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
            <div>
              <div className="text-2xl md:text-3xl font-black text-gold-400 mb-1">7+ Yrs</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider font-medium">Proven Track Record</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-gold-400 mb-1">500+</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider font-medium">Multiple Clients</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-gold-400 mb-1">98%</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider font-medium">Client Retention</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-gold-400 mb-1">100%</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider font-medium">CA-Led Integrity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
