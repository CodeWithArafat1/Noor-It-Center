"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  // 1. Updated state to use 'phone' instead of 'email'
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        // 2. Clear form with 'phone'
        setFormData({ name: '', phone: '', message: '' }); 
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Gradient Container */}
        <div className="relative bg-gradient-to-br from-[#e5f8f1] via-[#ccf1e3] to-[#99e3c7] rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden shadow-sm">
          
          {/* Decorative Background Blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00B87A]/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Ready to Accelerate Your Tech Career?
              </h2>
              <p className="text-slate-700 text-lg mb-10 leading-relaxed">
                Let's discuss which IT training course or digital solution is the perfect fit for your goals and business growth.
              </p>

              {/* Consultation Card */}
              <div className="bg-white/60 backdrop-blur-md border border-white/50 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <h4 className="font-bold text-slate-900 mb-2">Book a Free 30-Minute Consultation</h4>
                <p className="text-sm text-slate-600 mb-4">
                  Get expert guidance and a custom strategy for your career. <br/>
                  📞 <a href="tel:+8801234567890" className="hover:text-[#00B87A] transition-colors">+880 1234 567 890</a> • ⏱ Response within 2 hours
                </p>
                <Link 
                  href="https://wa.me/1234567890" 
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-[#00B87A] hover:bg-[#009f6b] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md shadow-[#00B87A]/20"
                >
                  Book A Free Call
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column: Form */}
            <div>
              <h3 className="font-bold text-slate-900 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/80 backdrop-blur-sm border border-white/60 rounded-xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#00B87A] focus:ring-1 focus:ring-[#00B87A] transition-all shadow-sm"
                />
                
                {/* 3. Changed from Email to Phone */}
                <input
                  type="tel"
                  required
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/80 backdrop-blur-sm border border-white/60 rounded-xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#00B87A] focus:ring-1 focus:ring-[#00B87A] transition-all shadow-sm"
                />
                
                <textarea
                  required
                  placeholder="Tell us about your goals..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/80 backdrop-blur-sm border border-white/60 rounded-xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#00B87A] focus:ring-1 focus:ring-[#00B87A] transition-all shadow-sm resize-none"
                ></textarea>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#00B87A] hover:bg-[#009f6b] disabled:bg-[#00B87A]/50 text-white rounded-xl px-5 py-4 font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#00B87A]/20"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                  {status !== 'loading' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <p className="text-emerald-700 font-medium text-sm text-center mt-2 bg-emerald-100/50 py-2 rounded-lg">
                    Message sent successfully! We will call you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 font-medium text-sm text-center mt-2 bg-red-100/50 py-2 rounded-lg">
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}