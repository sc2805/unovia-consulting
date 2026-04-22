import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Tag } from "lucide-react";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import CTABanner from "@/components/sections/CTABanner";
import BlogContent from "@/components/blog/BlogContent";

// =============================================================================
// Static params for all blog slugs
// =============================================================================

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// =============================================================================
// Dynamic metadata per article
// =============================================================================

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

// =============================================================================
// Category color mapping
// =============================================================================

const categoryColors: Record<string, string> = {
  "Tax Planning": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "GST Advisory": "bg-amber-50 text-amber-700 border-amber-200",
  "Wealth Management": "bg-blue-50 text-blue-700 border-blue-200",
  "Business Strategy": "bg-violet-50 text-violet-700 border-violet-200",
};

const categoryAccent: Record<string, string> = {
  "Tax Planning": "from-emerald-500 to-teal-600",
  "GST Advisory": "from-amber-500 to-orange-600",
  "Wealth Management": "from-blue-500 to-indigo-600",
  "Business Strategy": "from-violet-500 to-purple-600",
};

// =============================================================================
// Article Page
// =============================================================================

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const accentClass =
    categoryAccent[post.category] ?? "from-gold-500 to-gold-600";

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-50/50 to-white" />

        <div className="relative container-tight px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-navy-700 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Insights
          </Link>

          {/* Category badge */}
          <div className="mb-5">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border ${
                categoryColors[post.category] ?? "bg-gray-100 text-gray-600 border-gray-200"
              }`}
            >
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 mb-8">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          {/* Gradient accent bar */}
          <div
            className={`h-1 w-24 rounded-full bg-gradient-to-r ${accentClass} mb-0`}
          />
        </div>
      </section>

      {/* ── Article Body ─────────────────────────────────────────────────── */}
      <section className="pb-20 bg-white">
        <div className="container-tight px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="flex gap-12">
            {/* Main content */}
            <div className="flex-1 min-w-0">
              <BlogContent content={post.content} />
            </div>

            {/* Sticky sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-28 space-y-6">
                <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-navy-500 mb-3">
                    About this article
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="bg-gold-50 rounded-2xl p-6 border border-gold-100">
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-gold-700 mb-2">
                    Need Expert Advice?
                  </p>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Our specialists are ready to help with your specific situation.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center text-sm font-semibold text-white bg-navy-800 hover:bg-navy-700 transition-colors rounded-xl px-4 py-2.5"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Have Questions About Your Finances?"
        subtext="Our experts are ready to provide personalized guidance tailored to your unique situation."
      />
    </>
  );
}
