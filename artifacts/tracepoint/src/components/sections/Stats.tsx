import React from "react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

function Counter({ end, suffix, label, note }: { end: number; suffix: string; label: string; note?: string }) {
  const { count, ref } = useCountUp(end, 2);

  return (
    <div ref={ref}>
      <div className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-1 flex items-baseline">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium text-foreground">{label}</div>
      {note && <div className="text-xs text-muted-foreground mt-1">{note}</div>}
    </div>
  );
}

export default function Stats() {
  const pillars = [
    {
      title: "Confidentiality",
      desc: "Non-disclosure from first contact. Client identities are never disclosed under any circumstances.",
    },
    {
      title: "Legal compliance",
      desc: "All operations conducted within Indian law. Findings are documented to evidentiary standards.",
    },
    {
      title: "Verified reporting",
      desc: "Every claim in our reports is traceable to a primary source. No conjecture, no filler.",
    },
    {
      title: "Direct communication",
      desc: "You work with the investigator handling your case — not a rotating account manager.",
    },
  ];

  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          <Counter end={500} suffix="+" label="Cases closed" note="since 2014" />
          <Counter end={10} suffix="+" label="Years operating" note="Hyderabad based" />
          <Counter end={95} suffix="%" label="Client return rate" />
          <Counter end={48} suffix="h" label="Avg. first report" note="for standard cases" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-border pt-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="space-y-3"
            >
              <h3 className="font-semibold text-foreground">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
