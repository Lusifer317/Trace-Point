import React from "react";
import Hero from "@/components/sections/Hero";
import CyberFraudHelp from "@/components/sections/CyberFraudHelp";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import ServicesTeaser from "@/components/sections/ServicesTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <CyberFraudHelp />
      <ServicesTeaser />
      <Stats />
      <Testimonials />
      <About />
      <Contact />
    </>
  );
}
