"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Toggle floating state based on scroll position
      setIsScrolled(window.scrollY > 20);

      // 2. Determine which section is currently in view for the active link
      const sections = ['services', 'portfolio', 'pricing', 'about', 'contact'];
      
      // Default to home if we are at the very top
      if (window.scrollY < 150) {
        setActiveSection('home');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the middle/top of the screen
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to dynamically style nav links
  const getLinkClasses = (section: string) => {
    return activeSection === section
      ? "bg-white text-slate-900 px-5 py-2 rounded-full text-sm font-medium shadow-sm border border-slate-100 transition-all duration-300"
      : "text-slate-500 hover:text-slate-900 px-5 py-2 rounded-full text-sm font-medium border border-transparent transition-all duration-300";
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        isScrolled ? 'pt-6 px-4' : 'pt-0 px-0'
      }`}
    >
      <nav 
        className={`flex items-center justify-between w-full bg-white transition-all duration-500 ${
          isScrolled 
            ? 'max-w-6xl border border-slate-200 rounded-full px-4 py-2.5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]' 
            : 'max-w-full border-b border-slate-100 rounded-none px-6 md:px-10 py-4 shadow-none'
        }`}
      >
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center pl-2">
          <span className="text-2xl font-black tracking-tight text-[#00B87A]">
            Noor <span className="font-medium text-slate-800">IT</span>
          </span>
        </Link>

        {/* Navigation Links - Desktop (Hidden on small screens) */}
        <div className="hidden md:flex items-center bg-slate-50/80 rounded-full p-1.5 border border-slate-100">
          <Link href="/" className={getLinkClasses('home')}>
            Home
          </Link>
          <Link href="#services" className={getLinkClasses('services')}>
            Services
          </Link>
          <Link href="#pricing" className={getLinkClasses('pricing')}>
            Pricing
          </Link>
          <Link href="#portfolio" className={getLinkClasses('portfolio')}>
            Portfolio
          </Link>
          <Link href="#about" className={getLinkClasses('about')}>
            About
          </Link>
          <Link href="#contact" className={getLinkClasses('contact')}>
            Contact
          </Link>
        </div>

        {/* Call to Action Button */}
        <Link 
          href="#contact" 
          className="bg-[#00B87A] hover:bg-[#009f6b] text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#00B87A]/30"
        >
          Book A Free Call
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </nav>
    </header>
  );
}