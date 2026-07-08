import React from 'react';

// Demo JSON Data - Tailored for Noor IT Center Courses
const whyChooseUsData = {
  sectionMeta: {
    tagline: "THE DIFFERENCE",
    title: <>
   Why Choose <span className="text-[#00B87A]">Noor IT Center</span>
    </>
    
  },
  benefits: [
    {
      id: 1,
      title: "Expert Instructors",
      description: "Learn directly from industry professionals with years of real-world experience in web development, design, and digital marketing.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "Career-Focused Curriculum",
      description: "Our courses go beyond theory. We teach practical, in-demand skills designed to help you land full-time jobs and high-paying freelance clients.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Student Success First",
      description: "Your learning outcomes drive every decision we make. We provide dedicated mentorship and clear communication to ensure you never fall behind.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    {
      id: 4,
      title: "Focus on Long-Term Growth",
      description: "We don't just teach quick fixes. We focus on foundational principles and modern tech stacks so your skills remain relevant for years to come.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      )
    },
    {
      id: 5,
      title: "Hands-on Projects",
      description: "Build a professional portfolio while you learn. Our assignments include complete website builds, live marketing campaigns, and real branding tasks.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
        </svg>
      )
    },
    {
      id: 6,
      title: "Verified Certification",
      description: "Earn a recognized certificate upon successful completion of your courses to showcase your proficiency to potential employers and clients.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      )
    }
  ]
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#00B87A] text-sm font-bold tracking-[0.2em] uppercase mb-3">
            {whyChooseUsData.sectionMeta.tagline}
          </h2>
          <h3 className="text-3xl md:text-[40px] font-extrabold text-slate-900">
            {whyChooseUsData.sectionMeta.title}
          </h3>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsData.benefits.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-8 rounded-2xl border border-slate-200 transition-all duration-300 hover:border-[#00B87A] hover:shadow-lg group"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-[#00B87A]/10 text-[#00B87A] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#00B87A] group-hover:text-white">
                {item.icon}
              </div>
              
              {/* Content */}
              <h4 className="text-lg font-bold text-slate-900 mb-3">
                {item.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}