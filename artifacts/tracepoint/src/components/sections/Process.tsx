import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, ShieldAlert, Database, CheckCircle, FileText, Lock } from "lucide-react";

export default function Process() {
  const steps = [
    { num: "01", title: "Initial Consultation", desc: "Confidential briefing to understand objectives.", icon: <MessageSquare size={20} /> },
    { num: "02", title: "Risk Assessment", desc: "Evaluating scope, legality, and resources.", icon: <ShieldAlert size={20} /> },
    { num: "03", title: "Evidence Collection", desc: "Field operations and digital extraction.", icon: <Database size={20} /> },
    { num: "04", title: "Analysis & Verification", desc: "Cross-referencing data points.", icon: <CheckCircle size={20} /> },
    { num: "05", title: "Professional Reporting", desc: "Drafting admissible evidence logs.", icon: <FileText size={20} /> },
    { num: "06", title: "Case Closure", desc: "Secure handover and data destruction.", icon: <Lock size={20} /> },
  ];

  return (
    <section id="process" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4"
          >
            Investigation Process
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A methodical, legal, and results-driven approach to every case.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
          
          {/* Connecting Line (Mobile) */}
          <div className="block lg:hidden absolute top-0 bottom-0 left-8 w-0.5 bg-border z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-row lg:flex-col items-start lg:items-center relative"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center text-primary font-serif font-bold text-lg mb-0 lg:mb-6 shadow-[0_0_15px_rgba(212,175,55,0.2)] z-10">
                  {step.num}
                </div>
                <div className="ml-6 lg:ml-0 lg:text-center pt-2 lg:pt-0">
                  <div className="flex items-center lg:justify-center gap-2 mb-2 text-foreground">
                    <span className="text-muted-foreground">{step.icon}</span>
                    <h3 className="font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
