import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, Shield, Landmark, Scale, Cpu, Rocket, Factory, Building } from "lucide-react";

export default function Industries() {
  const industries = [
    { name: "Healthcare", icon: <HeartPulse size={24} />, desc: "Medical fraud and compliance." },
    { name: "Insurance", icon: <Shield size={24} />, desc: "Claims verification and fraud detection." },
    { name: "Financial Services", icon: <Landmark size={24} />, desc: "Asset tracing and due diligence." },
    { name: "Legal Firms", icon: <Scale size={24} />, desc: "Litigation support and evidence gathering." },
    { name: "Technology", icon: <Cpu size={24} />, desc: "IP theft and insider threat monitoring." },
    { name: "Startups", icon: <Rocket size={24} />, desc: "Founder background checks and VC risk." },
    { name: "Manufacturing", icon: <Factory size={24} />, desc: "Supply chain and vendor verification." },
    { name: "Gov. Contractors", icon: <Building size={24} />, desc: "Clearance and compliance audits." }
  ];

  return (
    <section id="industries" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Industries We Serve</h2>
          <p className="text-muted-foreground">Domain-specific intelligence tailored to sector vulnerabilities.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors rounded-lg p-6 group"
            >
              <div className="text-muted-foreground group-hover:text-primary transition-colors mb-4">
                {ind.icon}
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{ind.name}</h3>
              <p className="text-sm text-muted-foreground">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
