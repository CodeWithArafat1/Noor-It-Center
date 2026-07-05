"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Demo JSON Data for the Team
const teamData = {
  sectionMeta: {
    tagline: "OUR TEAM",
    title: "Meet The Team",
  },
  members: [
    {
      id: 1,
      name: "ROHAN HAFEJ",
      role: "Founder & Leader",
      image: "/instructors/rohan.png",
      socials: { linkedin: "#", instagram: "#", twitter: "#" }
    },
    {
      id: 2,
      name: "JOY AHMED",
      role: "Co-Founder & Business Development",
      image: "/instructors/joy.jpg",
      socials: { linkedin: "#", instagram: "#", twitter: "#" }
    },
    {
      id: 3,
      name: "ARAFAT NILL", // Placeholder name
      role: "Senior Graphic Designer", // Placeholder role
      image: "/instructors/nill.jpg",
      socials: { linkedin: "#", instagram: "#", twitter: "#" }
    },
   
  ]
};

export default function OurTeam() {
  // Set the first team member (index 0) to be active by default
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="team" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#00B87A] text-sm font-bold tracking-[0.2em] uppercase mb-3">
            {teamData.sectionMeta.tagline}
          </h2>
          <h3 className="text-3xl md:text-[40px] font-extrabold text-slate-900">
            {teamData.sectionMeta.title}
          </h3>
        </div>

        {/* Accordion Hover Container */}
        <div className="flex justify-center items-center h-[400px] md:h-[450px] gap-3 md:gap-4 w-full max-w-4xl mx-auto">
          {teamData.members.map((member, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={member.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`relative h-full rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out bg-slate-800 ${
                  isActive ? "w-[65%] md:w-[450px]" : "w-[25%] md:w-[130px]"
                }`}
              >
                {/* Team member photo */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 65vw, 450px"
                  className="object-cover"
                  priority={index === 0}
                />

                {/* Bottom Gradient Overlay (always present for legibility, deeper when active) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-70"
                  }`}
                ></div>

                {/* Team Member Info */}
                <div
                  className={`absolute bottom-6 left-6 right-6 transition-all duration-500 ease-in-out ${
                    isActive ? "translate-y-0 opacity-100 delay-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  <h4 className="text-white font-bold text-lg whitespace-nowrap uppercase tracking-wider">
                    {member.name}
                  </h4>
                  <p className="text-white/80 text-xs md:text-sm mb-4 whitespace-nowrap">
                    {member.role}
                  </p>

                  {/* Social Icons */}
                  <div className="flex gap-2">
                    {/* LinkedIn */}
                    <Link href={member.socials.linkedin} className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#00B87A] flex items-center justify-center text-white transition-colors backdrop-blur-sm">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </Link>
                    {/* Instagram */}
                    <Link href={member.socials.instagram} className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#00B87A] flex items-center justify-center text-white transition-colors backdrop-blur-sm">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </Link>
                    {/* Twitter/X */}
                    <Link href={member.socials.twitter} className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#00B87A] flex items-center justify-center text-white transition-colors backdrop-blur-sm">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </Link>
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