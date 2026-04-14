"use client";

// =============================================================================
// TrustIndicators — Animated counter stats bar
// =============================================================================

import { useEffect, useRef, useState } from "react";
import { TRUST_STATS } from "@/lib/constants";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out curve
      const progress = step / steps;
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      current = Math.round(easedProgress * value);
      setCount(current);

      if (step >= steps) {
        setCount(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center px-4">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 tabular-nums">
        {count.toLocaleString()}
        <span className="text-gold-400">{suffix}</span>
      </div>
    </div>
  );
}

export default function TrustIndicators() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden" id="trust-indicators">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-800 via-navy-900 to-navy-800" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {TRUST_STATS.map((stat, index) => (
            <div key={index} className="relative">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-center text-sm text-gray-400 font-medium">
                {stat.label}
              </p>
              {/* Divider (except last) */}
              {index < TRUST_STATS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-px h-12 -translate-y-1/2 bg-gradient-to-b from-transparent via-navy-600 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
