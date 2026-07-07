"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Demo JSON Data - Easily edit prices, titles, and features here!
const pricingData = {
  sectionMeta: {
    tagline: "PRICING PLANS",
    title: "Our Services & Courses",
    description:
      "Affordable, high-quality IT training and digital solutions tailored for your success.",
  },
  plans: [
    {
      id: 1,
      name: "Computer Basic Application",
      price: "৳4,500",
      originalPrice: "৳5,000",
      duration: "3 Months",
      description:
        "Essential office skills for everyday professional and personal use.",
      isPopular: false,
      features: [
        "MS Word, Excel & PowerPoint",
        "Internet & Email Basics",
        "Typing Speed Optimization",
        "Basic Troubleshooting",
      ],
      buttonText: "Enroll Now",
      buttonLink: "#enroll",
    },
    {
      id: 2,
      name: "Computer Advance Application",
      price: "৳6,000",
      originalPrice: "৳6,500",
      duration: "6 Months",
      description:
        "Dive deeper into complex applications and database management.",
      isPopular: true,
      features: [
        "Advanced MS Excel (Formulas)",
        "MS Access & Database Basics",
        "Advanced Data Entry",
        "Productivity Tools Setup",
      ],
      buttonText: "Enroll Now",
      buttonLink: "#enroll",
    },

    {
      id: 3,
      name: "Basic Web Development",
      price: "৳15,000",
      originalPrice: "৳25,000",
      duration: "10 Months",
      description: "Learn the fundamentals to build interactive web pages.",
      isPopular: false,
      features: [
        "HTML5 & CSS3 Foundations",
        "Basic JavaScript & DOM",
        "Responsive Web Design",
        "Hosting & Domain Setup",
      ],
      buttonText: "Enroll Now",
      buttonLink: "#enroll",
    },
    {
      id: 4,
      name: "Digital Marketing",
      originalPrice: "৳25,000",
      price: "৳12,000",
      duration: "3 Months",
      description: "Strategic SEO and data-driven campaigns to grow any brand.",
      isPopular: false,
      features: [
        "Facebook Marketing",
        "LinkedIn Marketing",
        "Quora Marketing",
        "Reddit Marketing",
        "Tumblr Marketing",
        "Google Ads",
        "TikTok Ads",
        "Facebook Ads",
        "Affiliate Marketing",
        "CPA Marketing",
        "Pay Per Call Marketing",
        "Black Hat SEO",
        "Social Media Black Hat",
        "PDF Site Black Hat",
        "Forum Site Black Hat",
        "News Site Black Hat",
      ],
      buttonText: "Enroll Now",
      buttonLink: "#enroll",
    },
  ],
};

// Parses a currency string like "৳4,500" into a plain number (4500)
const parsePrice = (value: string): number => {
  const numeric = value.replace(/[^0-9.]/g, "");
  return parseFloat(numeric) || 0;
};

// Calculates the discount percentage from originalPrice vs price, e.g. "25% OFF"
const getDiscountLabel = (
  price: string,
  originalPrice?: string,
): string | null => {
  if (!originalPrice) return null;
  const current = parsePrice(price);
  const original = parsePrice(originalPrice);
  if (!original || original <= current) return null;
  const percentOff = Math.round(((original - current) / original) * 100);
  return `${percentOff}% OFF`;
};

export default function Pricing() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Native pointer-based drag-to-scroll — smoother than React synthetic mouse events,
  // and works uniformly for mouse + touch + pen via the Pointer Events API.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let startScrollLeft = 0;
    let moved = false;

    const onPointerDown = (e: PointerEvent) => {
      // Let native touch scrolling handle touch input; only hijack mouse/pen for drag.
      if (e.pointerType === "touch") return;
      isDown = true;
      moved = false;
      startX = e.clientX;
      startScrollLeft = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
      setIsDragging(true);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDown) return;
      const delta = e.clientX - startX;
      if (Math.abs(delta) > 4) moved = true;
      el.scrollLeft = startScrollLeft - delta;
    };

    const endDrag = (e: PointerEvent) => {
      if (!isDown) return;
      isDown = false;
      setIsDragging(false);
      if (moved) {
        // Snap after release for a smooth landing on the nearest card.
        requestAnimationFrame(() => {
          el.style.scrollBehavior = "smooth";
        });
      }
    };

    const onClickCapture = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);
    el.addEventListener("click", onClickCapture, true);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointercancel", endDrag);
      el.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const distance = card ? card.offsetWidth + 24 : 320;
    el.style.scrollBehavior = "smooth";
    el.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#00B87A] text-sm font-bold tracking-[0.2em] uppercase mb-3">
            {pricingData.sectionMeta.tagline}
          </h2>
          <h3 className="text-3xl md:text-[40px] font-extrabold text-slate-900 mb-6">
            {pricingData.sectionMeta.title}
          </h3>
          <p className="text-slate-500 text-lg">
            {pricingData.sectionMeta.description}
          </p>
        </div>

        {/* Carousel Controls — desktop only */}
        <div className="hidden md:flex justify-end gap-3 mb-6">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous plans"
            className="w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-[#00B87A] hover:text-white hover:border-[#00B87A] transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next plans"
            className="w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-[#00B87A] hover:text-white hover:border-[#00B87A] transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>

        {/* Pricing Cards Carousel */}
        <div
          ref={scrollerRef}
          className={`flex gap-6 md:gap-7 overflow-x-auto snap-x snap-mandatory pt-6 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide ${
            isDragging ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
          style={{ scrollSnapType: "x mandatory", touchAction: "pan-x pan-y" }}
        >
          {pricingData.plans.map((plan) => (
            <div
              key={plan.id}
              data-card
              className="relative rounded-3xl p-8 bg-white text-slate-900 border border-slate-200 shadow-sm flex flex-col shrink-0 snap-center w-[85%] sm:w-[320px] md:w-[340px]"
            >
              {/* "Popular" ribbon — same card style, just a badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#00B87A] text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md">
                  Hot Course
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-4 text-slate-900">
                  {plan.name}
                </h4>

                {/* Discount badge — auto-calculated from price vs originalPrice */}
                {getDiscountLabel(plan.price, plan.originalPrice) && (
                  <span className="inline-block bg-red-50 text-red-500 text-xs font-bold tracking-wide px-2.5 py-1 rounded-full mb-2">
                    {getDiscountLabel(plan.price, plan.originalPrice)}
                  </span>
                )}

                <div className="flex items-baseline gap-2 mb-3 flex-wrap">
                  <span className="text-3xl font-black text-slate-900">
                    {plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span className="text-lg font-semibold text-slate-400 line-through">
                      {plan.originalPrice}
                    </span>
                  )}
                  <span className="text-sm font-semibold text-slate-400">
                    / {plan.duration}
                  </span>
                </div>

                <p className="text-sm leading-relaxed min-h-[40px] text-slate-500">
                  {plan.description}
                </p>
              </div>

              <div className="w-full h-[1px] mb-6 bg-slate-100"></div>

              {/* Features List */}
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 shrink-0 mt-0.5 text-[#00B87A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-slate-700 font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Call to Action Button — same style on every card */}
              <Link
                href={plan.buttonLink}
                draggable={false}
                className="w-full py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 bg-[#00B87A]/10 text-[#00B87A] hover:bg-[#00B87A] hover:text-white"
              >
                {plan.buttonText}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Hint text for mobile */}
        <p className="text-center text-xs text-slate-400 mt-2 md:hidden">
          Swipe left or right to see more plans
        </p>
      </div>

      {/* Hide scrollbar but keep scroll functionality */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      />
    </section>
  );
}
