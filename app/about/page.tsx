import type { Metadata } from "next";
import {
  Shield,
  Target,
  Eye,
  AlertTriangle,
  BarChart2,
  FileText,
  Layers,
  CheckCircle,
  Mail,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { COMPANY } from "@/lib/constants";

// =============================================================================
// About Page — Content sourced from Unovia Wealth Architecture deck
// =============================================================================

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Architecting Wealth, Securing Legacy — Learn about Unovia Consulting's mission, vision, approach, and the financial masterplan we build for every client.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-50/50 to-white" />
        <div className="relative container-tight px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-600 mb-4">
              About Unovia
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 leading-tight tracking-tight mb-6">
              Architecting Wealth,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">
                Securing Legacy
              </span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mb-8">
              Unovia Consulting, established in {COMPANY.founded}, is a premium financial
              advisory firm delivering personalized wealth strategies, tax solutions,
              and investment advisory to individuals and businesses across India.
            </p>
            {/* Trusted pillars */}
            <div className="flex flex-wrap gap-4">
              {["Trusted", "Transparent", "Client-Focused"].map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-1.5 bg-navy-800 text-gold-400 text-xs font-bold tracking-[0.15em] uppercase rounded-full"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Wealth Foundation ───────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                eyebrow="Our Foundation"
                title="Building the Foundation for Sustainable Wealth"
                align="left"
              />
              <div className="space-y-4 text-gray-500 leading-relaxed text-sm md:text-base">
                <p>
                  At Unovia, we believe lasting prosperity isn&apos;t built on quick wins — it&apos;s
                  engineered with intention. Our advisory framework is designed around three
                  interconnected layers that compound over time.
                </p>
                <p>
                  We operate with transparency and honesty to provide accurate audits and
                  build long-term trust, while empowering individuals through personalized
                  wealth strategies that secure both current prosperity and future legacy.
                </p>
              </div>
            </div>

            {/* Wealth Pyramid */}
            <div className="space-y-3">
              {[
                {
                  level: "Long-Term Goals & Retirement",
                  desc: "The apex — where financial freedom and legacy converge",
                  color: "bg-navy-800 text-white",
                  width: "w-full",
                },
                {
                  level: "Sustainable Wealth",
                  desc: "Compounding strategies that grow and protect across market cycles",
                  color: "bg-navy-600 text-white",
                  width: "w-full",
                },
                {
                  level: "Consistent Financial Growth",
                  desc: "Immediate market solutions and disciplined strategic planning",
                  color: "bg-gold-500 text-navy-900",
                  width: "w-full",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`${item.color} rounded-xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg`}
                >
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {3 - i}
                  </span>
                  <div>
                    <p className="font-bold text-sm">{item.level}</p>
                    <p className="text-xs opacity-75 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ────────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 md:p-10 bg-navy-800 rounded-2xl text-white">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Operating with transparency and honesty to provide accurate audits and
                build long-term trust. We deliver immediate market solutions alongside
                strategic planning that creates enduring value for every client.
              </p>
            </div>

            <div className="p-8 md:p-10 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Empowering individuals through personalized wealth strategies, securing
                both current prosperity and future legacy. We envision a world where
                every financial decision is made with clarity and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem We Solve ────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Why Unovia"
            title="Resolving Financial Complexity with Structural Clarity"
            subtitle="Most people face the same invisible barriers to wealth. We've engineered a masterplan to dissolve each one."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Structural Risks */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-red-500 mb-6">
                The Structural Risks
              </p>
              <div className="space-y-4">
                {[
                  "Complex financial decisions without expert guidance",
                  "Tax inefficiencies eroding wealth year over year",
                  "Poor investment planning misaligned with life goals",
                ].map((risk, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed">{risk}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Unovia Masterplan */}
            <div className="bg-navy-800 rounded-2xl p-8">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-gold-400 mb-6">
                The Unovia Masterplan
              </p>
              <div className="space-y-4">
                {[
                  "Personalized financial strategies built around your unique goals",
                  "Data-driven investment insights for informed, confident decisions",
                  "End-to-end financial management across wealth, tax, and compliance",
                ].map((solution, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300 leading-relaxed">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Engineered Capabilities ─────────────────────────────────────── */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Our Capabilities"
            title="Engineered for Comprehensive Wealth Management"
            subtitle="A customized wealth strategy built on four interlocking service pillars."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Layers,
                title: "Financial Planning",
                color: "from-blue-500 to-indigo-600",
                points: ["Short & long-term planning", "Retirement structuring", "Goal-based roadmaps"],
              },
              {
                icon: BarChart2,
                title: "Investment Advisory",
                color: "from-emerald-500 to-teal-600",
                points: ["Tailored portfolio solutions", "Goal-based asset allocation", "Risk-adjusted returns"],
              },
              {
                icon: Shield,
                title: "Risk Management",
                color: "from-amber-500 to-orange-600",
                points: ["Identified risk mapping", "Suitable product matching", "Risk/return optimisation"],
              },
              {
                icon: FileText,
                title: "Tax Consulting",
                color: "from-violet-500 to-purple-600",
                points: ["Identifying tax inefficiencies", "Tax-efficient strategies", "Detailed advisory & filing"],
              },
            ].map((cap, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gold-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`h-1.5 bg-gradient-to-r ${cap.color}`} />
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-5 group-hover:bg-navy-800 transition-colors duration-300">
                    <cap.icon className="w-6 h-6 text-navy-700 group-hover:text-gold-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-navy-800 mb-3">{cap.title}</h3>
                  <ul className="space-y-2">
                    {cap.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-gray-500">
                        <CheckCircle className="w-3.5 h-3.5 text-gold-500 flex-shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The 3-Step Process ──────────────────────────────────────────── */}
      <section className="section-padding bg-navy-800">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Getting Started"
            title="Initiate Your Financial Masterplan Today"
            subtitle="Three purposeful steps from first contact to a fully architected financial journey."
            dark={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                step: "01",
                title: "Initiate",
                desc: "Contact our team to begin the dialogue. We start by understanding your current position, aspirations, and concerns — with no obligation.",
                icon: Mail,
              },
              {
                step: "02",
                title: "Audit",
                desc: "We evaluate your current financial structures with full transparency and a client-focused approach — uncovering inefficiencies and opportunities.",
                icon: FileText,
              },
              {
                step: "03",
                title: "Architect",
                desc: "Your customized financial journey begins. We design and implement a strategy tailored to your goals, with Unovia as your trusted long-term partner.",
                icon: Layers,
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <span className="absolute top-6 right-6 text-4xl font-black text-white/5 select-none">
                  {step.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              {COMPANY.email}
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Architect Your Wealth?"
        subtext="Begin with a transparent, no-obligation consultation. Let Unovia build the financial foundation that secures your legacy."
      />
    </>
  );
}
