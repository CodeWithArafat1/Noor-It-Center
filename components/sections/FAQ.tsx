"use client";

import React, { useState } from 'react';

// Demo JSON Data for IT Course FAQs
const faqData = {
  sectionMeta: {
    tagline: "FAQS",
    title: <>
   Got Questions? <span className="text-[#00B87A]">We&apos;ve Got Answers</span>
    </>,
    description: "Everything you need to know about our IT courses, certifications, and enrollment process."
  },
  questions: [
    {
      id: 1,
      question: "Do I need prior coding or technical experience to join?",
      answer: "Not at all! Our Starter Track and basic courses (like Basic Web Development and Computer Basic Application) are designed entirely for beginners. We start from scratch and guide you step-by-step."
    },
    {
      id: 2,
      question: "Will I receive a certificate after completing a course?",
      answer: "Yes. Upon successful completion of any course or track, you will receive a verified certificate from Noor IT Center that you can add to your resume and LinkedIn profile."
    },
    {
      id: 3,
      question: "Do you provide job placement or freelance support?",
      answer: "Absolutely. Our Career Pro and Masterclass tracks include dedicated modules on how to navigate freelance marketplaces (like Upwork and Fiverr), build your portfolio, and prepare for job interviews."
    },
    {
      id: 4,
      question: "Are the classes held online or offline?",
      answer: "We offer flexible learning modes. You can choose to attend physical classes at our IT Center for hands-on guidance, or join our live online sessions from the comfort of your home."
    },
    {
      id: 5,
      question: "Can I upgrade my course plan later?",
      answer: "Yes! If you start with a single course or the Starter Track, you can easily upgrade to the Career Pro or Masterclass plan later by paying the price difference."
    }
  ]
};

export default function FAQ() {
  // State to track which accordion item is currently open
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#00B87A] text-sm font-bold tracking-[0.2em] uppercase mb-3">
            {faqData.sectionMeta.tagline}
          </h2>
          <h3 className="text-3xl md:text-[40px] font-extrabold text-slate-900 mb-6">
            {faqData.sectionMeta.title}
          </h3>
          <p className="text-slate-500 text-lg">
            {faqData.sectionMeta.description}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.questions.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={faq.id} 
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-[#00B87A] bg-[#00B87A]/5 shadow-md' : 'border-slate-200 bg-white hover:border-[#00B87A]/50'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-bold text-lg pr-8 transition-colors duration-300 ${isOpen ? 'text-[#00B87A]' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Icon */}
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isOpen ? 'bg-[#00B87A] text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2.5"
                    >
                      {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" /> // Minus
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /> // Plus
                      )}
                    </svg>
                  </div>
                </button>

                {/* Smooth expanding answer container */}
                <div 
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}