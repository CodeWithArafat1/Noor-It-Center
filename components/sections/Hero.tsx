import Link from 'next/link';

// Demo JSON Data
const heroData = {
  heading: "High Converting Web Solutions & IT Training",
  subheading: "We design high-converting websites and provide expert training in essential computer skills to empower your career and business.",
  buttons: {
    primary: {
      text: "Get A Free Quote",
      href: "#quote"
    },
    secondary: {
      text: "View Our Work",
      href: "#portfolio"
    }
  },
};

// Data for the bottom marquee ticker
const courseList = [
  "MS Word",
  "MS Excel",
  "MS PowerPoint",
  "MS Access",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Web Development",
  "Digital Marketing",
  "Data Entry"
];

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex flex-col overflow-hidden bg-gradient-to-b from-white via-[#f0fdf6] to-[#a8e6cf] pt-28">
      
      {/* Main Hero Content - Uses flex-1 to center perfectly in available space */}
      <div className="flex-1 flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column: Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              {heroData.heading}
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
              {heroData.subheading}
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                href={heroData.buttons.primary.href}
                className="bg-[#00B87A] hover:bg-[#009f6b] text-white px-8 py-3.5 rounded-full text-base font-semibold flex items-center gap-2 transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,184,122,0.39)]"
              >
                {heroData.buttons.primary.text}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>

              <Link 
                href={heroData.buttons.secondary.href}
                className="bg-white text-[#00B87A] hover:bg-slate-50 px-8 py-3.5 rounded-full text-base font-semibold flex items-center gap-2 transition-all duration-300 shadow-sm border border-slate-100"
              >
                {heroData.buttons.secondary.text}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Media Mockup */}
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border-4 border-white/40 bg-emerald-800 bg-gradient-to-tr from-green-900 to-emerald-600 flex items-center justify-center">
            <span className="text-white/50 font-medium">Place your image here</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-[#00B87A] rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,184,122,0.4)] transition-transform duration-300 group-hover:scale-110">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Ticker Section - shrink-0 ensures it stays at its fixed height at the bottom */}
      <div className="w-full bg-white py-6 border-t border-slate-100 shadow-inner overflow-hidden relative shrink-0">
        <div className="text-center mb-4">
          <p className="text-sm font-medium text-slate-500">
            Master essential skills with <span className="font-bold text-slate-800">Noor IT Center</span>
          </p>
        </div>
        
        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden w-full group mask-image-linear">
          <div className="animate-marquee flex whitespace-nowrap items-center">
            {/* First set of items */}
            {courseList.map((course, index) => (
              <span key={`first-${index}`} className="mx-8 text-xl font-bold text-slate-300 hover:text-[#00B87A] transition-colors duration-300 cursor-default">
                {course}
              </span>
            ))}
            {/* Duplicated set for seamless loop */}
            {courseList.map((course, index) => (
              <span key={`second-${index}`} className="mx-8 text-xl font-bold text-slate-300 hover:text-[#00B87A] transition-colors duration-300 cursor-default">
                {course}
              </span>
            ))}
            {/* Third set to ensure it fills ultra-wide screens */}
            {courseList.map((course, index) => (
              <span key={`third-${index}`} className="mx-8 text-xl font-bold text-slate-300 hover:text-[#00B87A] transition-colors duration-300 cursor-default">
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Inline styles for custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
        .mask-image-linear {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}} />
    </section>
  );
}