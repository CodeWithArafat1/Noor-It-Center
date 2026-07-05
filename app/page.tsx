import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import OurTeam from "@/components/sections/OurTeam";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <WhyChooseUs />
      <OurTeam />
      <HowItWorks />
      <FAQ />
      <Contact/>
    </>
  );
}
