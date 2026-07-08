'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

// Demo testimonial data
const testimonialsData = [
  {
    id: 1,
    name: "Farhana Akter",
    role: "Web Development Student",
    image: "/testimonials/farhana.jpg",
    rating: 5,
    text:
      "Amar kono coding background chilo na, kintu Noor IT Center e class kore ami ekhon nijei full website banate pari. Instructor ra khub friendly, kono question e biroktho hoy na.",
  },
  {
    id: 2,
    name: "Tanvir Hasan",
    role: "MS Office Course",
    image: "/testimonials/tanvir.jpg",
    rating: 5,
    text:
      "Office e kaj korar jonno MS Excel er upor onek chap chilo. Ekhane 2 mash er course kore ami ekhon office e sobar theke fast report banai. Highly recommended!",
  },
  {
    id: 3,
    name: "Sumaiya Islam",
    role: "Digital Marketing Trainee",
    image: "/testimonials/sumaiya.jpg",
    rating: 4,
    text:
      "Freelancing shuru korar age ami onek confuse chilam. Digital Marketing course ta amake practical knowledge diyeche, ekhon nijer client der handle korte pari.",
  },
  {
    id: 4,
    name: "Rakib Hossain",
    role: "Graphic Design Student",
    // image: "/testimonials/rakib.jpg",
    rating: 5,
    text:
      "Photoshop shikhbo bhabini kokhono eto easy hobe. Step by step shikhiye, hands-on project diye practice koray — eta amar kache shobcheye valo legeche.",
  },
  {
    id: 5,
    name: "Nusrat Jahan",
    role: "Web Development Student",
    image: "", // Example without image to test the initials
    rating: 5,
    text:
      "Class er environment ta khub supportive. Kono topic bujhte na parle instructor der abar dhoirjo dhore bujhiye deya — eta amar shikhar journey onek shohoj kore dieche.",
  },
];

// Auto-slide interval: 3 seconds (3000ms)
const AUTO_SLIDE_INTERVAL = 3000;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < rating ? "#00B87A" : "#E2E8F0"}
          className="w-4 h-4"
        >
          <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
        </svg>
      ))}
    </div>
  );
}

// Helper function to get initials from the name
const getInitials = (name: string) => {
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

export default function Testimonials() {
  // We clone first & last slides to create an infinite loop illusion
  const slides = [
    testimonialsData[testimonialsData.length - 1],
    ...testimonialsData,
    testimonialsData[0],
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // start at real first slide
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);
  const isDragging = useRef(false);
  const autoSlideTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  
  // Transition lock to prevent blank slides on rapid clicking/swiping
  const isTransitioning = useRef(false);

  // Auto slide
  useEffect(() => {
    if (isPaused) return;
    autoSlideTimer.current = setInterval(() => {
      goToNext();
    }, AUTO_SLIDE_INTERVAL);
    return () => {
      if (autoSlideTimer.current) clearInterval(autoSlideTimer.current);
    };
  }, [isPaused, currentIndex]);

  const goToNext = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const goToPrev = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setWithTransition(true);
    setCurrentIndex(index + 1); // +1 because of the prepended clone
  };

  // Handle the seamless loop jump once the transition ends
  const handleTransitionEnd = () => {
    isTransitioning.current = false; // Transition complete, unlock

    if (currentIndex === slides.length - 1) {
      // reached cloned first slide -> snap back to real first (index 1)
      setWithTransition(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      // reached cloned last slide -> snap to real last
      setWithTransition(false);
      setCurrentIndex(slides.length - 2);
    }
  };

  // Touch handlers for smooth swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    setIsPaused(true);
    setWithTransition(false);
    isTransitioning.current = false; // Reset lock if user manually interrupts
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    if (trackRef.current) {
      const slideWidthPercent = 100 / slides.length;
      const dragPercent =
        (touchDeltaX.current / trackRef.current.offsetWidth) * 100;
      trackRef.current.style.transform = `translateX(calc(-${
        currentIndex * slideWidthPercent
      }% + ${dragPercent}%))`;
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const SWIPE_THRESHOLD = 50;

    if (touchDeltaX.current > SWIPE_THRESHOLD) {
      goToPrev();
    } else if (touchDeltaX.current < -SWIPE_THRESHOLD) {
      goToNext();
    } else {
      // Not enough movement — snap back smoothly
      setWithTransition(true);
      isTransitioning.current = false;
    }

    touchStartX.current = null;
    touchDeltaX.current = 0;
    // Resume autoplay shortly after interaction
    setTimeout(() => setIsPaused(false), 1000);
  };

  const slideWidthPercent = 100 / slides.length;
  // Real (non-clone) active index for dots — maps currentIndex back to 0..N-1
  const realActiveIndex =
    ((currentIndex - 1) + testimonialsData.length) % testimonialsData.length;

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-[#f0fdf6] overflow-hidden">
      <div className="max-w-3xl mx-auto text-center px-4 mb-12">
        <span className="inline-block text-sm font-semibold text-[#00B87A] bg-[#00B87A]/10 px-4 py-1.5 rounded-full mb-4">
          Student Reviews
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          What Our <span className="text-[#00B87A]">Students Say</span>
        </h2>
        <p className="mt-4 text-slate-600 text-lg">
          Real feedback from real students who transformed their careers with us.
        </p>
      </div>

      <div
        className="relative max-w-4xl mx-auto px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="overflow-hidden touch-pan-y select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            className={`flex ${
              withTransition ? "transition-transform duration-500 ease-out" : ""
            }`}
            style={{
              width: `${slides.length * 100}%`,
              transform: `translateX(-${currentIndex * slideWidthPercent}%)`,
            }}
          >
            {slides.map((testimonial, i) => (
              <div
                key={`${testimonial.id}-${i}`}
                className="px-2 sm:px-4"
                style={{ width: `${100 / slides.length}%` }}
              >
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-8 sm:p-10 h-full flex flex-col">
                  {/* Quote icon */}
                  <svg
                    className="w-9 h-9 text-[#00B87A]/20 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6.5c0-2 1.6-3.5 3.5-3.5V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-3.5c0-2 1.6-3.5 3.5-3.5V8z" />
                  </svg>

                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed flex-1">
                    {testimonial.text}
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-gradient-to-tr from-green-900 to-emerald-600">
                      {testimonial.image ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full text-white font-bold text-lg tracking-wider">
                          {getInitials(testimonial.name)}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 leading-tight">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-500 leading-tight mb-1">
                        {testimonial.role}
                      </p>
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next Arrows — desktop only */}
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous testimonial"
          className="hidden sm:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg hover:bg-[#00B87A] hover:text-white items-center justify-center text-slate-600 transition-colors z-10"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next testimonial"
          className="hidden sm:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg hover:bg-[#00B87A] hover:text-white items-center justify-center text-slate-600 transition-colors z-10"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === realActiveIndex
                  ? "w-6 bg-[#00B87A]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}