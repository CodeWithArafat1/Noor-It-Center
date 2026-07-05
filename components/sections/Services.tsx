import React from 'react';
import Link from 'next/link';

// Updated JSON Data for Noor IT Center Services & Courses
const servicesData = {
  sectionMeta: {
    tagline: "WHAT WE DO",
    title: "Our Services & Courses",
    description: "Empowering you with essential tech skills and professional digital solutions to accelerate your career and business."
  },
  items: [
    {
      id: 1,
      title: "Basic Web Development",
      description: "Learn the fundamentals of HTML, CSS, and basic JavaScript to build your very first interactive web pages.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      id: 2,
      title: "Computer Basic Application",
      description: "Master essential office software including MS Word, Excel, and PowerPoint for seamless daily professional use.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      id: 3,
      title: "Computer Advance Application",
      description: "Dive deeper into complex computer applications, database management, and advanced productivity tools.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Strategic SEO, social media marketing, and data-driven campaigns to grow brands and maximize online reach.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20.33V22h2v-1.67A9.03 9.03 0 0 0 21 12h-1.67A7.36 7.36 0 0 1 12 19.33 7.36 7.36 0 0 1 4.67 12H3a9.03 9.03 0 0 0 8 8.33z"></path><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
        </svg>
      )
    },
    {
      id: 5,
      title: "Graphic Design",
      description: "Creative visual design training using industry-standard tools like Adobe Photoshop and Illustrator.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>
        </svg>
      )
    },
    {
      id: 6,
      title: "Website Development",
      description: "End-to-end professional web development services tailored to create dynamic, high-performing websites.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      )
    }
  ]
};

export default function Services() {
  return (
    <>
      <section id="services" className="py-24 bg-[#FAFAFA] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#00B87A] text-sm font-bold tracking-[0.2em] uppercase mb-3">
              {servicesData.sectionMeta.tagline}
            </h2>
            <h3 className="text-3xl md:text-[40px] font-extrabold text-slate-900 mb-6">
              {servicesData.sectionMeta.title}
            </h3>
            <p className="text-slate-500 text-lg">
              {servicesData.sectionMeta.description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.items.map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-[#00B87A] mb-6 group-hover:bg-[#00B87A] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                
                {/* Content */}
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <Link 
        href="https://wa.me/1234567890" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:scale-110 transition-transform duration-300 z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </Link>
    </>
  );
}