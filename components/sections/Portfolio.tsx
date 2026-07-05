import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Demo JSON Data for Portfolio Cases
const portfolioData = {
  sectionMeta: {
    tagline: "OUR RECENT WORK",
    title: "Our Portfolio",
  },
  cases: [
    {
      id: 1,
      title: "Sleek Style",
      year: "2026",
      image: "/portfolio/1.jpg",
    },
    {
      id: 2,
      title: "MM Glow",
      year: "2024",
      image: "/portfolio/3.jpg",
    },

    {
      id: 3,
      title: "MM Glow",
      year: "2025",
      image: "/portfolio/4.jpg",
    },
  ],
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#00B87A] text-sm font-bold tracking-[0.2em] uppercase mb-3">
            {portfolioData.sectionMeta.tagline}
          </h2>
          <h3 className="text-3xl md:text-[40px] font-extrabold text-slate-900">
            {portfolioData.sectionMeta.title}
          </h3>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative w-full pb-16">
          {portfolioData.cases.map((item, index) => (
            <div
              key={item.id}
              className="sticky w-full rounded-2xl border border-slate-200 overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] bg-white mb-24 last:mb-0 transition-all"
              style={{ top: `calc(120px + ${index * 20}px)` }}
            >
              {/* Full-width image */}
              <div className="relative w-full h-64 sm:h-80 md:h-[480px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 1024px"
                  className="object-cover"
                  priority={index === 0}
                />

                {/* Left side year badge — glass effect */}
                <div className="absolute left-5 top-5 sm:left-7 sm:top-7 bg-white/15 backdrop-blur-md border border-white/30 text-white text-sm font-bold tracking-widest uppercase px-4 py-2 rounded-full">
                  {item.year}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}