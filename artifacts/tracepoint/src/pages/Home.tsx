import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import Dashboard from "@/components/sections/Dashboard";
import Industries from "@/components/sections/Industries";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Stats />
        <Process />
        <Dashboard />
        <Industries />
        <CaseStudies />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      
      {/* Custom Crosshair Cursor Element */}
      <div 
        className="fixed pointer-events-none z-[100] w-6 h-6 border-[1.5px] border-primary/50 rounded-full mix-blend-difference hidden md:block"
        id="custom-cursor"
        style={{ left: '-20px', top: '-20px' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-primary rounded-full" />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          body { cursor: none; }
          a, button, input, select, textarea { cursor: none; }
        }
      `}} />
    </div>
  );
}

// Add simple cursor tracking to document body
if (typeof document !== 'undefined') {
  document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      
      // Scale up when hovering clickables
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, select, textarea, .cursor-pointer')) {
        cursor.style.transform += ' scale(1.5)';
        cursor.style.borderColor = 'rgba(212, 175, 55, 1)';
      } else {
        cursor.style.borderColor = 'rgba(212, 175, 55, 0.5)';
      }
    }
  });
}
