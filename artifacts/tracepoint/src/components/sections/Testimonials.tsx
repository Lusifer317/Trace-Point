import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "TracePoint provided indisputable digital evidence that saved our firm millions in a complex litigation suit. Their discretion and technical capability are unmatched in India.",
      name: "Senior Partner",
      title: "Hyderabad Law Firm"
    },
    {
      quote: "The executive background check uncovered critical undisclosed information that completely changed our acquisition strategy. They see what others miss.",
      name: "Chief Financial Officer",
      title: "IT Services Company"
    },
    {
      quote: "We use TracePoint exclusively for high-value suspicious claims. Their surveillance teams are professional, objective, and deliver court-ready reports.",
      name: "Claims Manager",
      title: "National Insurance Co."
    },
    {
      quote: "When we suspected IP theft, their digital forensics team deployed immediately. They identified the breach source within 48 hours without disrupting our operations.",
      name: "Managing Director",
      title: "Pharmaceutical Group"
    },
    {
      quote: "The due diligence report on our potential joint-venture partner was exhaustive. It prevented us from entering a disastrous agreement.",
      name: "Founder",
      title: "E-Commerce Startup"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-secondary border-y border-border relative overflow-hidden">
      {/* Decorative quotes background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <Quote size={400} className="text-primary" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Client Confidence</h2>
          <p className="text-muted-foreground">What leaders say about our operational effectiveness.</p>
        </div>

        <div className="max-w-4xl mx-auto relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center text-center"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-10">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="font-serif font-bold text-primary">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentIndex].title}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
