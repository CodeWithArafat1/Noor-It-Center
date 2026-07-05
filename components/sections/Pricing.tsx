import React from 'react';
import Link from 'next/link';

// Demo JSON Data - Easily edit prices, titles, and features here!
const pricingData = {
  sectionMeta: {
    tagline: "PRICING PLANS",
    title: "Our Services & Courses",
    description: "Affordable, high-quality IT training and digital solutions tailored for your success."
  },
  plans: [
    {
      id: 1,
      name: "Computer Basic Application",
      price: "৳3,000",
      description: "Essential office skills for everyday professional and personal use.",
      isPopular: false,
      features: [
        "MS Word, Excel & PowerPoint",
        "Internet & Email Basics",
        "Typing Speed Optimization",
        "Basic Troubleshooting"
      ],
      buttonText: "Enroll Now",
      buttonLink: "#enroll"
    },
    {
      id: 2,
      name: "Computer Advance Application",
      price: "৳5,000",
      description: "Dive deeper into complex applications and database management.",
      isPopular: false,
      features: [
        "Advanced MS Excel (Formulas)",
        "MS Access & Database Basics",
        "Advanced Data Entry",
        "Productivity Tools Setup"
      ],
      buttonText: "Enroll Now",
      buttonLink: "#enroll"
    },
    {
      id: 3,
      name: "Graphic Design",
      price: "৳8,000",
      description: "Creative visual design training using industry-standard tools.",
      isPopular: true, // Highlights this card in green
      features: [
        "Adobe Photoshop Mastery",
        "Adobe Illustrator Techniques",
        "Logo & Branding Design",
        "Freelance Marketplace Guide"
      ],
      buttonText: "Enroll Now",
      buttonLink: "#enroll"
    },
    {
      id: 4,
      name: "Digital Marketing",
      price: "৳7,000",
      description: "Strategic SEO and data-driven campaigns to grow any brand.",
      isPopular: false,
      features: [
        "Social Media Management",
        "Search Engine Optimization (SEO)",
        "Facebook & Google Ads",
        "Analytics & Reporting"
      ],
      buttonText: "Enroll Now",
      buttonLink: "#enroll"
    },
    {
      id: 5,
      name: "Basic Web Development",
      price: "৳6,000",
      description: "Learn the fundamentals to build interactive web pages.",
      isPopular: false,
      features: [
        "HTML5 & CSS3 Foundations",
        "Basic JavaScript & DOM",
        "Responsive Web Design",
        "Hosting & Domain Setup"
      ],
      buttonText: "Enroll Now",
      buttonLink: "#enroll"
    },
    {
      id: 6,
      name: "Website Development",
      price: "৳15,000",
      description: "End-to-end professional web development for high-performing sites.",
      isPopular: true, // Highlights this card in green
      features: [
        "Full-Stack Development Basics",
        "React.js & Next.js Frameworks",
        "Tailwind CSS Styling",
        "Database Integration"
      ],
      buttonText: "Enroll Now",
      buttonLink: "#enroll"
    }
  ]
};

export default function Pricing() {
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

        {/* Pricing Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col h-full ${
                plan.isPopular 
                  ? 'bg-[#00B87A] text-white shadow-xl border-none transform hover:-translate-y-1' 
                  : 'bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {/* "Popular" Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md">
                  Hot Course
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h4 className={`text-xl font-bold mb-4 ${plan.isPopular ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h4>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-black">{plan.price}</span>
                </div>
                <p className={`text-sm leading-relaxed min-h-[40px] ${plan.isPopular ? 'text-white/90' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className={`w-full h-[1px] mb-6 ${plan.isPopular ? 'bg-white/20' : 'bg-slate-100'}`}></div>

              {/* Features List */}
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg 
                      className={`w-5 h-5 shrink-0 mt-0.5 ${plan.isPopular ? 'text-white' : 'text-[#00B87A]'}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${plan.isPopular ? 'text-white font-medium' : 'text-slate-700 font-medium'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Call to Action Button */}
              <Link 
                href={plan.buttonLink}
                className={`w-full py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                  plan.isPopular 
                    ? 'bg-white text-[#00B87A] hover:bg-slate-50 shadow-lg' 
                    : 'bg-[#00B87A]/10 text-[#00B87A] hover:bg-[#00B87A] hover:text-white'
                }`}
              >
                {plan.buttonText}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}