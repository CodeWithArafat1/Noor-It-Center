"use client";

import React, { useEffect, useRef, useState } from 'react';

// Demo JSON Data for Process Steps
const processData = {
  sectionMeta: {
    tagline: "OUR PROCESS",
    title: "How Does It Work",
    description: "Our proven 5-step process to deliver exceptional results"
  },
  steps: [
    {
      id: 1,
      stepNumber: "01",
      title: "30 Minutes Consultancy",
      description: "We discuss your business goals, challenges, and what you actually need to achieve your objectives."
    },
    {
      id: 2,
      stepNumber: "02",
      title: "Requirement & Analysis",
      description: "We assess your project requirements and gather necessary assets. We analyze everything based on your specific needs."
    },
    {
      id: 3,
      stepNumber: "03",
      title: "Implementation",
      description: "We build your project with precision, implementing all features and functionalities according to the agreed requirements."
    },
    {
      id: 4,
      stepNumber: "04",
      title: "Revision",
      description: "We review the project together, make necessary adjustments, and ensure everything meets your expectations."
    },
    {
      id: 5,
      stepNumber: "05",
      title: "Project Delivery",
      description: "Your project is delivered with complete documentation and support for a smooth launch."
    }
  ]
};

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Smooth scroll listener to fill the line dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start filling the line when the top of the container is 65% down the viewport
      const startTrigger = windowHeight * 0.65; 
      
      // The total scrollable distance for the line inside this component
      const totalDistance = rect.height;
      
      // Calculate progress (0 to 1)
      let progress = (startTrigger - rect.top) / totalDistance;
      
      // Clamp the value strictly between 0 and 1
      progress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[#00B87A] text-sm font-bold tracking-[0.2em] uppercase mb-3">
            {processData.sectionMeta.tagline}
          </h2>
          <h3 className="text-3xl md:text-[40px] font-extrabold text-slate-900 mb-4">
            {processData.sectionMeta.title}
          </h3>
          <p className="text-slate-500 text-lg">
            {processData.sectionMeta.description}
          </p>
        </div>

        {/* Responsive Timeline Container */}
        <div className="relative w-full max-w-5xl mx-auto py-10" ref={containerRef}>
          
          {/* Background Gray Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full"></div>
          
          {/* Animated Green Fill Line */}
          <div 
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-[#00B87A] -translate-x-1/2 rounded-full transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress * 100}%` }}
          ></div>

          {/* Steps */}
          <div className="relative z-10 flex flex-col gap-12 md:gap-0">
            {processData.steps.map((step, index) => {
              // Calculate at what scroll percentage this specific step should activate
              const activationPoint = index * (1 / (processData.steps.length - 1 || 1));
              
              // Offset slightly so it activates right as the line touches the circle
              const isActive = scrollProgress >= activationPoint - 0.08;
              
              // Alternating layout logic for Desktop (Even goes left, Odd goes right)
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={step.id} 
                  className="relative flex items-center w-full md:min-h-[220px]"
                >
                  
                  {/* Center Circle Indicator */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div 
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-base transition-all duration-500 delay-75 ${
                        isActive 
                          ? "bg-[#00B87A] text-white shadow-[0_0_0_6px_rgba(0,184,122,0.2)] scale-110" 
                          : "bg-slate-200 text-slate-500 scale-100"
                      }`}
                    >
                      {step.id}
                    </div>
                  </div>

                  {/* Card Container Logic:
                    - Mobile: w-full, padding left to clear the circle.
                    - Desktop Even: w-1/2, padding right to push away from center line.
                    - Desktop Odd: w-1/2, margin left auto to push to right side, padding left.
                  */}
                  <div 
                    className={`w-full flex md:w-1/2 pl-[80px] md:pl-0 transition-all duration-700 ease-out ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    } ${
                      isEven 
                        ? "md:pr-12 lg:pr-20 md:justify-end" 
                        : "md:pl-12 lg:pl-20 md:ml-auto md:justify-start"
                    }`}
                  >
                    <StepCard step={step} isActive={isActive} />
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

// Reusable Step Card Component
function StepCard({ step, isActive }: { step: any, isActive: boolean }) {
  return (
    <div 
      className={`bg-white border rounded-2xl p-6 md:p-8 w-full max-w-lg transition-all duration-500 hover:-translate-y-1 ${
        isActive ? "border-[#00B87A]/40 shadow-xl shadow-[#00B87A]/5" : "border-slate-200 shadow-sm"
      }`}
    >
      <div className="text-[#00B87A] text-xs font-bold tracking-widest uppercase mb-3">
        STEP {step.stepNumber}
      </div>
      <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
        {step.title}
      </h4>
      <p className="text-slate-500 text-sm leading-relaxed mb-6">
        {step.description}
      </p>

      {/* 5-Step Mini Progress Bars */}
      <div className="flex gap-2 w-full">
        {[1, 2, 3, 4, 5].map((barIndex) => (
          <div 
            key={barIndex} 
            className={`h-1.5 flex-1 rounded-full transition-colors duration-700 ${
              barIndex <= step.id 
                ? (isActive ? "bg-[#00B87A]" : "bg-[#00B87A]/30") 
                : "bg-slate-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
}