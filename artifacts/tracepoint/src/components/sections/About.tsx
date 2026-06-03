import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">The Agency</h2>
              <div className="w-20 h-1 bg-primary mb-6" />
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              TracePoint Intelligence is a premier private investigation and corporate risk mitigation firm based in Hyderabad, India. We specialize in providing actionable, legally-admissible intelligence to corporate legal departments, HR divisions, and private individuals.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Our team consists of former law enforcement officers, certified digital forensics experts, and seasoned corporate analysts. We operate with strict adherence to Indian law while employing state-of-the-art methodology to uncover facts that protect our clients' interests.
            </p>

            <div className="pt-6">
              <h3 className="font-serif font-semibold text-foreground mb-4">Core Values</h3>
              <div className="flex flex-wrap gap-3">
                {["Confidentiality", "Integrity", "Precision", "Professionalism", "Accountability"].map((val, i) => (
                  <span key={i} className="px-4 py-2 bg-secondary border border-border text-sm text-foreground rounded-full">
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Abstract Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            >
              {/* Concentric circles representing intelligence gathering */}
              <div className="absolute inset-0 rounded-full border border-border/50 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-primary/20 animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-full border border-accent/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-24 rounded-full border border-border/80 border-dashed" />
              
              {/* Center point */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
              
              {/* Scanning line */}
              <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-gradient-to-r from-primary to-transparent origin-left animate-[spin_4s_linear_infinite]" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
