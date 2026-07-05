'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Demo JSON Data
const heroData = {
  heading: "High Converting Web Solutions & IT Training",
  subheading:
    "We design high-converting websites and provide expert training in essential computer skills to empower your career and business.",
  buttons: {
    primary: { text: "Get A Free Quote", href: "#quote" },
    secondary: { text: "View Our Work", href: "#portfolio" }
  },
};

// Instructor slider data — left photo, right name + course they teach
const instructors = [
  {
    name: "Arafat Nill",
    designation: "Senior Instructor",
    course: "Web Development Trainer",
    image: "/instructors/nill.jpg",
  },
  {
    name: "Joy Ahmed",
    designation: "Instructor",
    course: "Computer Office Application",
    image: "/instructors/joy.jpg",
  },
  {
    name: "Rohan Hafej",
    designation: "Marketing Trainer",
    course: "Digital Marketing",
    image: "/instructors/rohan.png",
  },
];

// Data for the bottom marquee ticker
const courseList = [
  "MS Word", "MS Excel", "MS PowerPoint", "MS Access",
  "Adobe Photoshop", "Adobe Illustrator", "Web Development",
  "Digital Marketing", "Data Entry"
];

export default function Hero() {
  const [active, setActive] = useState(0);

  // Auto-advance the slider every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % instructors.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    setActive(((index % instructors.length) + instructors.length) % instructors.length);
  };

  const current = instructors[active];

  return (
    <section className="relative w-full h-screen min-h-[800px] flex flex-col overflow-hidden bg-gradient-to-b from-white via-[#f0fdf6] to-[#a8e6cf] pt-28">

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">

          {/* Left Column: Instructor Photo Slider */}
          <div className="relative w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl group border-4 border-white/40 bg-emerald-800 bg-gradient-to-tr from-green-900 to-emerald-600 flex items-center justify-center">

            {instructors.map((instructor, index) => (
              <div
                key={instructor.name}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === active ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  sizes="(max-width: 1024px) 90vw, 400px"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}

            {/* Prev / Next Arrows */}
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label="Previous instructor"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label="Next instructor"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {instructors.map((instructor, index) => (
                <button
                  key={instructor.name}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Show ${instructor.name}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === active ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Content + Active Instructor Info */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              {heroData.heading}
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
              {heroData.subheading}
            </p>

            {/* Active instructor card */}
            <div
              key={current.name}
              className="mt-8 flex items-center gap-4 bg-white/70 border border-slate-100 rounded-2xl px-5 py-4 shadow-sm w-fit max-w-full animate-[fadeIn_0.5s_ease]"
            >
              <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden bg-gradient-to-tr from-green-900 to-emerald-600">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-slate-900 leading-tight">{current.name}</p>
                <p className="text-sm text-slate-500 leading-tight">{current.designation}</p>
                <p className="text-sm text-[#00B87A] font-semibold leading-tight mt-0.5">
                  Course: {current.course}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={heroData.buttons.primary.href}
                className="bg-[#00B87A] hover:bg-[#009f6b] text-white px-8 py-3.5 rounded-full text-base font-semibold flex items-center gap-2 transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,184,122,0.39)]"
              >
                {heroData.buttons.primary.text}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
              <Link
                href={heroData.buttons.secondary.href}
                className="bg-white text-[#00B87A] hover:bg-slate-50 px-8 py-3.5 rounded-full text-base font-semibold flex items-center gap-2 transition-all duration-300 shadow-sm border border-slate-100"
              >
                {heroData.buttons.secondary.text}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Ticker Section */}
      <div className="w-full bg-white py-6 border-t border-slate-100 shadow-inner overflow-hidden relative shrink-0">
        <div className="text-center mb-4">
          <p className="text-sm font-medium text-slate-500">
            Master essential skills with <span className="font-bold text-slate-800">Noor IT Center</span>
          </p>
        </div>

        <div className="relative flex overflow-x-hidden w-full group mask-image-linear">
          <div className="animate-marquee flex whitespace-nowrap items-center">
            {courseList.map((course, index) => (
              <span key={`first-${index}`} className="mx-8 text-xl font-bold text-slate-300 hover:text-[#00B87A] transition-colors duration-300 cursor-default">
                {course}
              </span>
            ))}
            {courseList.map((course, index) => (
              <span key={`second-${index}`} className="mx-8 text-xl font-bold text-slate-300 hover:text-[#00B87A] transition-colors duration-300 cursor-default">
                {course}
              </span>
            ))}
            {courseList.map((course, index) => (
              <span key={`third-${index}`} className="mx-8 text-xl font-bold text-slate-300 hover:text-[#00B87A] transition-colors duration-300 cursor-default">
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Inline styles for custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
        .mask-image-linear {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}