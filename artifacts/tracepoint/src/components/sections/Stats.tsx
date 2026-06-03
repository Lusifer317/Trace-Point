import React from "react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { ShieldCheck, Crosshair, Scale, CheckCircle2 } from "lucide-react";

function Counter({ end, suffix, label }: { end: number, suffix: string, label: string }) {
  const { count, ref } = useCountUp(end, 2);
  
  return (
    <div className="text-center" ref={ref}>
      <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2 flex justify-center items-baseline">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium text-foreground tracking-wider uppercase">{label}</div>
    </div>
  );
}

export default function Stats() {
  const pillars = [
    { icon: <ShieldCheck size={28} />, title: "Discretion", desc: "Absolute confidentiality in every interaction." },
    { icon: <Crosshair size={28} />, title: "Precision", desc: "Meticulous attention to detail and fact-checking." },
    { icon: <Scale size={28} />, title: "Integrity", desc: "Strict adherence to legal and ethical standards." },
    { icon: <CheckCircle2 size={28} />, title: "Accountability", desc: "Transparent reporting and verifiable evidence." },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden border-y border-border">
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
          <Counter end={500} suffix="+" label="Investigations" />
          <Counter end={95} suffix="%" label="Satisfaction" />
          <Counter end={24} suffix="/7" label="Response" />
          <Counter end={100} suffix="%" label="Confidential" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-primary border border-border">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
