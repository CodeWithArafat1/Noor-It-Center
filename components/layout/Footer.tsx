import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-400/50 pt-20 pb-10 relative z-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="lg:pr-8">
            <Link href="/" className="flex items-center mb-6">
              <span className="text-3xl font-black tracking-tight text-[#00B87A]">
                Noor <span className="font-medium text-slate-800">IT</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Empowering you with essential tech skills and professional digital solutions to accelerate your career and business from zero to one.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link href="#" className="w-9 h-9 rounded-full bg-[#00B87A]/10 text-[#00B87A] hover:bg-[#00B87A] hover:text-white flex items-center justify-center transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-[#00B87A]/10 text-[#00B87A] hover:bg-[#00B87A] hover:text-white flex items-center justify-center transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-[#00B87A]/10 text-[#00B87A] hover:bg-[#00B87A] hover:text-white flex items-center justify-center transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-slate-500 hover:text-[#00B87A] text-sm transition-colors">Courses & Services</Link></li>
              <li><Link href="#portfolio" className="text-slate-500 hover:text-[#00B87A] text-sm transition-colors">Portfolio</Link></li>
              <li><Link href="#pricing" className="text-slate-500 hover:text-[#00B87A] text-sm transition-colors">Pricing</Link></li>
              <li><Link href="#faq" className="text-slate-500 hover:text-[#00B87A] text-sm transition-colors">FAQs</Link></li>
              <li><Link href="#team" className="text-slate-500 hover:text-[#00B87A] text-sm transition-colors">Meet The Team</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services / Courses */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><Link href="#pricing" className="text-slate-500 hover:text-[#00B87A] text-sm transition-colors">Basic Web Development</Link></li>
              <li><Link href="#pricing" className="text-slate-500 hover:text-[#00B87A] text-sm transition-colors">Graphic Design</Link></li>
              <li><Link href="#pricing" className="text-slate-500 hover:text-[#00B87A] text-sm transition-colors">Digital Marketing</Link></li>
              <li><Link href="#pricing" className="text-slate-500 hover:text-[#00B87A] text-sm transition-colors">Computer Basic Application</Link></li>
              <li><Link href="#pricing" className="text-slate-500 hover:text-[#00B87A] text-sm transition-colors">Website Development</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Contact</h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a href="mailto:contact@nooritcenter.com" className="text-slate-500 hover:text-[#00B87A] text-sm transition-colors flex items-center gap-2">
                  contact@nooritcenter.com
                </a>
              </li>
              <li>
                <a href="tel:+8801234567890" className="text-slate-500 hover:text-[#00B87A] text-sm transition-colors flex items-center gap-2">
                  +880 1234 567 890
                </a>
              </li>
              <li className="text-slate-500 text-sm">
                Dhaka, Bangladesh
              </li>
            </ul>
            
            {/* Outlined Call to Action Button */}
            <Link 
              href="#contact"
              className="inline-block border border-[#00B87A] text-[#00B87A] hover:bg-[#00B87A] hover:text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
            >
              Book A Free Call
            </Link>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {currentYear} Noor IT Center. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link href="#" className="text-slate-400 hover:text-[#00B87A] text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-400 hover:text-[#00B87A] text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}