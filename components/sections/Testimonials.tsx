"use client";

// =============================================================================
// Testimonials — Client quotes carousel/grid
// =============================================================================

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="section-padding bg-white" id="testimonials-section">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="Trusted by Industry Leaders"
          subtitle="Hear from the businesses and families we've helped achieve their financial ambitions."
        />

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gold-200 hover:shadow-lg transition-all duration-300 group"
            >
              <Quote className="w-8 h-8 text-gold-300 mb-4 transition-colors group-hover:text-gold-500" />
              <blockquote className="text-gray-600 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center text-white text-sm font-bold">
                  {testimonial.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy-800">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative p-6 bg-gray-50 rounded-2xl border border-gray-100 mb-6">
            <Quote className="w-7 h-7 text-gold-300 mb-4" />
            <blockquote className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[120px]">
              &ldquo;{TESTIMONIALS[active].quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center text-white text-sm font-bold">
                {TESTIMONIALS[active].name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="text-sm font-semibold text-navy-800">
                  {TESTIMONIALS[active].name}
                </div>
                <div className="text-xs text-gray-500">
                  {TESTIMONIALS[active].title}, {TESTIMONIALS[active].company}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-navy-800 hover:text-navy-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === active ? "bg-navy-800 w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-navy-800 hover:text-navy-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
