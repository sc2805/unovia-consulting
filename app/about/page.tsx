import type { Metadata } from "next";
import { Shield, Users, Award, Lightbulb, Target, Eye } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { COMPANY, VALUES, TRUST_STATS } from "@/lib/constants";

// =============================================================================
// About Page — Company story, mission, values, and team
// =============================================================================

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Unovia Consulting — our story, mission, values, and the experienced team of CAs and MBAs delivering premium financial advisory from Kolkata.",
};

const iconMap = { Shield, Users, Award, Lightbulb };

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-50/50 to-white" />
        <div className="relative container-tight px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-600 mb-4">
              About Unovia
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 leading-tight tracking-tight mb-6">
              Building Financial
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">
                Confidence
              </span>{" "}
              Since {COMPANY.founded}
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              {COMPANY.description}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="From a Vision to a Trusted Partner"
                align="left"
              />
              <div className="space-y-4 text-gray-500 leading-relaxed text-sm md:text-base">
                <p>
                  Unovia Consulting was founded in {COMPANY.founded} in Kolkata with a clear purpose: to make expert financial
                  advisory accessible to businesses and individuals who deserve more than
                  one-size-fits-all solutions.
                </p>
                <p>
                  Built by an experienced team of Chartered Accountants and MBAs, we bring deep
                  domain expertise across wealth management, taxation, GST compliance, and strategic
                  business consulting. Our team&apos;s combined experience spans some of India&apos;s
                  top financial institutions and Big 4 firms.
                </p>
                <p>
                  What hasn&apos;t changed is our commitment to personalized service, deep
                  expertise, and measurable results. Every engagement begins with understanding
                  your unique circumstances — because your financial journey is unlike anyone
                  else&apos;s.
                </p>
              </div>
            </div>

            {/* Stats visual */}
            <div className="grid grid-cols-2 gap-4">
              {TRUST_STATS.map((stat, i) => (
                <div
                  key={i}
                  className="p-6 bg-navy-50 rounded-2xl text-center hover:bg-navy-100 transition-colors duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-navy-800 mb-1">
                    {stat.value.toLocaleString()}
                    <span className="text-gold-500">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 md:p-10 bg-navy-800 rounded-2xl text-white">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                To empower individuals and businesses with expert financial guidance that
                creates lasting value — protecting wealth, minimizing risk, ensuring compliance,
                and unlocking growth. We exist to make complex financial decisions simple,
                strategic, and stress-free.
              </p>
            </div>

            <div className="p-8 md:p-10 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                To be India&apos;s most trusted financial advisory firm — recognized for the depth
                of our expertise, the quality of our relationships, and the measurable impact
                we deliver. We envision a world where every financial decision is made with
                clarity and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Our Values"
            title="The Principles That Guide Us"
            subtitle="Every decision we make, every recommendation we offer, is guided by these core values."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="group p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:border-gold-200 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-5 group-hover:bg-navy-800 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-navy-700 group-hover:text-gold-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-800 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet Our Team"
            subtitle="An experienced team of Chartered Accountants and MBAs bringing deep expertise in finance, tax, and business strategy."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Coming Soon", role: "Managing Partner", initials: "UC" },
              { name: "Coming Soon", role: "Head of Tax Practice", initials: "UC" },
              { name: "Coming Soon", role: "Head of Wealth Management", initials: "UC" },
            ].map((member, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-gray-100 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Want to Work With Us?"
        subtext="Join our growing list of clients who trust Unovia for their financial and business advisory needs."
      />
    </>
  );
}
