"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Demo JSON Data for the Team
const teamData = {
  sectionMeta: {
    tagline: "OUR TEAM",
    title: <>
    Meet <span className="text-[#00B87A]">the Team</span></>
  },
  members: [
    {
      id: 1,
      name: "ROHAN HAFEJ",
      role: "Founder & Leader",
      image: "/instructors/rohan.png",
      socials: {
        facebook: "https://facebook.com/ROHAN.HAFAJ",
        whatsapp: "https://wa.me/8801623891499",
        telegram: "https://t.me/RoHaN_MrKing",
      },
    },
    {
      id: 3,
      name: "ARAFAT NILL", // Placeholder name
      role: "Senior Web Developer.", // Placeholder role
      image: "/instructors/nill.jpg",
      socials: {
        facebook: "https://facebook.com/arafatnills",
        whatsapp: "https://wa.me/8801772162533",
        telegram: "https://t.me/arafatnills",
      },
    },
    {
      id: 2,
      name: "JOY AHMED",
      role: "Computer Trainer",
      image: "/instructors/joy.jpg",
      socials: {
        facebook: "https://facebook.com/f.o.r.h.a.d.tsu.186971",
        whatsapp: "https://wa.me/8801318862478",
        telegram: "https://t.me/username",
      },
    },
  ],
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
                    isActive
                      ? "translate-y-0 opacity-100 delay-100"
                      : "translate-y-10 opacity-0"
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
                    {/* Facebook */}
                    <Link
                      target="_blank"
                      href={member.socials.facebook}
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#00B87A] flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12.061c0-5.554-4.5-10.061-10-10.061s-10 4.507-10 10.061c0 5.022 3.657 9.184 8.438 9.939v-7.03h-2.54v-2.909h2.54v-2.217c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.889h2.773l-.443 2.909h-2.33v7.03c4.781-.755 8.437-4.917 8.437-9.939z" />
                      </svg>
                    </Link>
                    {/* WhatsApp */}
                    <Link
                      target="_blank"
                      href={member.socials.whatsapp}
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#00B87A] flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.478-8.413z" />
                      </svg>
                    </Link>
                    {/* Telegram */}
                    <Link
                      href={member.socials.telegram}
                      target="_blank"
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#00B87A] flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.54 1.73z" />
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
