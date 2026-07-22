import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Their digital forensics team identified the breach source in under 48 hours without disrupting our operations. The final report held up in arbitration.",
    name: "R. Mehta",
    title: "Managing Director, Pharmaceutical Group",
  },
  {
    quote: "The executive background check surfaced undisclosed liabilities that changed our entire acquisition decision. Worth every rupee.",
    name: "S. Krishnamurthy",
    title: "CFO, IT Services Company",
  },
  {
    quote: "We have used TracePoint for suspicious claims for four years. Their surveillance reports are thorough, legally clean, and consistently accepted by courts.",
    name: "P. Nair",
    title: "Claims Head, General Insurance Co.",
  },
  {
    quote: "The due diligence on our JV partner was exhaustive — they found a prior bankruptcy under a different entity name. Saved us from a very bad partnership.",
    name: "A. Reddy",
    title: "Founder, E-Commerce Startup",
  },
  {
    quote: "Discreet, professional, and effective. They located assets that were deliberately hidden across three states within three weeks.",
    name: "V. Sharma",
    title: "Senior Partner, Hyderabad Law Firm",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-secondary border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-16">What clients say</h2>

          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <blockquote className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="text-sm">
                  <span className="font-semibold text-foreground">{testimonials[currentIndex].name}</span>
                  <span className="text-muted-foreground"> — {testimonials[currentIndex].title}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-0.5 transition-all rounded-full ${
                  i === currentIndex ? "bg-primary w-8" : "bg-border w-4 hover:bg-muted-foreground"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
