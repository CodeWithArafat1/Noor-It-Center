"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Demo JSON Data for Student Testimonials Carousel
const testimonialsData = {
  sectionMeta: {
    tagline: "TESTIMONIALS",
    title: "What Our Successful Students Are Saying About Us",
  },
  slides: [
    {
      id: 1,
      main: {
        quote: "Learning at Noor IT Center transformed my tech skills completely. Their hands-on approach to Web Development exceeded every expectation I had.",
        name: "Laetitia Monique",
        role: "Web Development Student",
        initials: "LM"
      },
      stat: {
        label: "Facts & Numbers",
        number: "98%",
        subtext: "Student satisfaction rate across all courses"
      },
      secondary: {
        stars: 5,
        quote: "Noor IT Center taught me graphic design from scratch with exceptional attention to detail. I landed my first freelance gig within the first month.",
        name: "Tom",
        role: "Graphic Design Student",
        initials: "T"
      }
    },
    {
      id: 2,
      main: {
        quote: "The digital marketing course is incredibly practical. The instructors care about your success and helped me launch my very first live campaign successfully.",
        name: "Sarah Jenkins",
        role: "Digital Marketing Student",
        initials: "SJ"
      },
      stat: {
        label: "Job Placement",
        number: "85%",
        subtext: "Students find freelance or full-time work post-graduation"
      },
      secondary: {
        stars: 5,
        quote: "Mastering MS Excel and advanced computer applications gave me the confidence to apply for administrative roles I previously avoided.",
        name: "David Lee",
        role: "Computer Applications Student",
        initials: "DL"
      }
    },
    {
      id: 3,
      main: {
        quote: "I came in with zero coding knowledge, and now I'm building interactive websites. The mentorship and curriculum at Noor IT Center are simply unmatched.",
        name: "Aisha Rahman",
        role: "Web Development Student",
        initials: "AR"
      },
      stat: {
        label: "Course Completion",
        number: "100%",
        subtext: "Dedicated support ensures no student is left behind"
      },
      secondary: {
        stars: 5,
        quote: "The flexible class timings and extremely knowledgeable teachers made learning Adobe Photoshop a breeze. Highly recommended!",
        name: "Michael",
        role: "Graphic Design Student",
        initials: "M"
      }
    }
  ]
};

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonialsData.slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Changes slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#00B87A] text-sm font-bold tracking-[0.2em] uppercase mb-3">
            {testimonialsData.sectionMeta.tagline}
          </h2>
          <h3 className="text-3xl md:text-[40px] font-extrabold text-slate-900">
            {testimonialsData.sectionMeta.title}
          </h3>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden mb-8">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonialsData.slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0 px-2 lg:px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Left: Main Large Testimonial */}
                  <div className="lg:col-span-7 bg-[#00B87A] rounded-2xl p-10 lg:p-14 text-white relative shadow-lg flex flex-col justify-between min-h-[350px]">
                    {/* Big Quote Icon */}
                    <svg className="w-12 h-12 text-white/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    
                    <div>
                      <p className="text-xl lg:text-2xl font-medium leading-relaxed mb-10">
                        "{slide.main.quote}"
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white text-[#00B87A] rounded-full flex items-center justify-center font-bold text-sm">
                          {slide.main.initials}
                        </div>
                        <div>
                          <h5 className="font-bold">{slide.main.name}</h5>
                          <p className="text-white/80 text-sm">{slide.main.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Stacked Cards (Stats + Secondary Testimonial) */}
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    
                    {/* Stats Card */}
                    <div className="bg-[#00a86b] rounded-2xl p-8 text-white shadow-lg flex-1 flex flex-col justify-center">
                      <p className="text-sm text-white/90 font-medium mb-2">{slide.stat.label}</p>
                      <h4 className="text-5xl font-extrabold tracking-tight mb-2">{slide.stat.number}</h4>
                      <p className="text-sm text-white/80">{slide.stat.subtext}</p>
                    </div>

                    {/* Secondary Testimonial Card */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex-1 flex flex-col justify-center">
                      {/* Star Rating */}
                      <div className="flex gap-1 mb-4 text-[#00B87A]">
                        {[...Array(slide.secondary.stars)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        "{slide.secondary.quote}"
                      </p>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center font-bold text-xs">
                          {slide.secondary.initials}
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm">{slide.secondary.name}</h5>
                          <p className="text-slate-500 text-xs">{slide.secondary.role}</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Dots */}
        <div className="flex justify-center gap-3 mb-24">
          {testimonialsData.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-[#00B87A] w-8' : 'bg-slate-300 hover:bg-[#00B87A]/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA Banner (From the screenshot) */}
        <div className="bg-[#00B87A] rounded-3xl p-10 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl">
          {/* Background decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#00a86b] opacity-50 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Ready to Start Your Tech Journey?
            </h3>
            <p className="text-white/80 text-base">
              Let's build skills that accelerate your career!
            </p>
          </div>
          
          <div className="relative z-10 shrink-0">
            <Link 
              href="#contact" 
              className="bg-white text-[#00B87A] hover:bg-slate-50 px-8 py-3.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-black/5"
            >
              Book A Free Counseling
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}