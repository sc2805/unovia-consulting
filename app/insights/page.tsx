import type { Metadata } from "next";
import { Clock, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { INSIGHTS } from "@/lib/constants";

// =============================================================================
// Insights Page — Blog-ready article listing
// =============================================================================

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Expert analysis, market commentary, and practical guides on taxation, GST, wealth management, and business strategy from Unovia Consulting.",
};

// Category colors
const categoryColors: Record<string, string> = {
  "Tax Planning": "bg-emerald-50 text-emerald-700",
  "GST Advisory": "bg-amber-50 text-amber-700",
  "Wealth Management": "bg-blue-50 text-blue-700",
  "Business Strategy": "bg-violet-50 text-violet-700",
};

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-50/50 to-white" />
        <div className="relative container-tight px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-600 mb-4">
              Insights & Articles
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 leading-tight tracking-tight mb-6">
              Expert Analysis &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">
                Market Commentary
              </span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Stay ahead with our latest thinking on tax, finance, GST compliance, and
              business strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-white pt-0">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSIGHTS.map((article, index) => (
              <article
                key={article.slug}
                id={article.slug}
                className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gold-200 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Color banner */}
                <div
                  className={`h-2 ${
                    index % 4 === 0
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                      : index % 4 === 1
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600"
                      : index % 4 === 2
                      ? "bg-gradient-to-r from-amber-500 to-orange-600"
                      : "bg-gradient-to-r from-violet-500 to-purple-600"
                  }`}
                />

                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                        categoryColors[article.category] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-lg font-bold text-navy-800 mb-3 group-hover:text-navy-700 transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <span className="text-xs text-gray-400">
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy-700 group-hover:text-gold-600 transition-colors">
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Coming soon notice */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400">
              More articles coming soon. Subscribe to our newsletter to stay updated.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Have Questions About Your Finances?"
        subtext="Our experts regularly publish insights on the topics that matter most. For personalized advice, reach out to our team."
      />
    </>
  );
}
