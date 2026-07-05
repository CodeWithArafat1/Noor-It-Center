import React from 'react';
import Link from 'next/link';

// Demo JSON Data for Portfolio Cases
const portfolioData = {
  sectionMeta: {
    tagline: "OUR RECENT WORK",
    title: "Our Portfolio",
  },
  cases: [
    {
      id: 1,
      category: "SKINCARE & BEAUTY",
      title: "Sleek Style",
      description: "Premium skincare store designed for radiant, healthy skin with high-converting product pages and a seamless shopping experience.",
      features: [
        "Curated skincare collections",
        "Glow-boosting beauty essentials",
        "Mobile optimized product pages"
      ],
      link: "#sleek-style",
      imageBg: "bg-[#b1a2dd]", 
      imageElement: (
        <div className="absolute inset-0 flex items-center justify-center bg-[#b1a2dd]">
          <div className="flex items-end justify-center w-full h-full p-8 gap-4">
             <div className="w-16 h-48 bg-[#4b3582] rounded-t-sm shadow-xl"></div>
             <div className="w-20 h-32 bg-white rounded-t-xl shadow-xl"></div>
             <div className="w-16 h-40 bg-[#4b3582] rounded-t-sm shadow-xl"></div>
             <div className="w-32 h-64 bg-[#c08d6b] rounded-tl-md shadow-2xl ml-4"></div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      category: "SKINCARE & BEAUTY",
      title: "MM Glow",
      description: "Modern beauty store featuring trending skincare, cosmetics, and wellness essentials designed to elevate your daily routine.",
      features: [
        "Trending skincare products",
        "Beauty & cosmetic collections",
        "Conversion optimized layout"
      ],
      link: "#mm-glow",
      imageBg: "bg-[#8a5a44]",
      imageElement: (
        <div className="absolute inset-0 flex items-center justify-center bg-[#8a5a44] overflow-hidden">
           <div className="w-full h-full bg-[#8a5a44] bg-opacity-80 flex items-center justify-center">
             <span className="text-white/60 font-medium">Image: MM Glow Asset</span>
           </div>
        </div>
      )
    }
  ]
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
              <div className="flex flex-col md:flex-row h-auto md:h-[480px]">
                
                {/* Left Side: Content */}
                <div className="w-full md:w-[45%] p-10 lg:p-14 flex flex-col justify-center bg-white z-10">
                  <div className="inline-block bg-[#e5f8f1] text-[#00B87A] text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 w-max">
                    {item.category}
                  </div>
                  
                  <h4 className="text-3xl font-extrabold text-slate-900 mb-4">
                    {item.title}
                  </h4>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {item.description}
                  </p>
                  
                  <ul className="space-y-3 mb-10">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-500">
                        <svg className="w-4 h-4 text-[#00B87A] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={item.link}
                    className="bg-[#00B87A] hover:bg-[#009f6b] text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 w-max shadow-md shadow-[#00B87A]/20"
                  >
                    View Case Study
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>

                {/* Right Side: Image Placeholder */}
                <div className={`w-full md:w-[55%] h-64 md:h-full relative overflow-hidden ${item.imageBg}`}>
                  {item.imageElement}
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="relative z-20 flex justify-center mt-12">
          <Link 
            href="#all-projects" // Change this to your actual full portfolio route later (e.g., "/portfolio")
            className="group border-2 border-[#00B87A] text-[#00B87A] hover:bg-[#00B87A] hover:text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase flex items-center gap-3 transition-all duration-300"
          >
            View All Projects
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}