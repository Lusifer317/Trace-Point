import React from "react";
import { motion } from "framer-motion";

export default function CaseStudies() {
  const cases = [
    {
      cat: "Corporate Fraud",
      title: "Internal Financial Misconduct",
      desc: "Recovered deleted communications and traced offshore accounts to prove embezzlement by a regional director.",
      outcome: "₹4.2Cr recovered. Prosecution successful."
    },
    {
      cat: "Due Diligence",
      title: "High-Risk Supplier Engagement",
      desc: "Uncovered undisclosed political affiliations and prior bankruptcies of a key vendor before a major contract signing.",
      outcome: "Contract aborted. Risk averted."
    },
    {
      cat: "Cyber Forensics",
      title: "Insider Data Exfiltration",
      desc: "Analyzed server logs to identify a departing engineer transferring proprietary algorithms to a personal cloud.",
      outcome: "Perpetrator identified. IP secured."
    },
    {
      cat: "Insurance Fraud",
      title: "Fabricated Disability Claim",
      desc: "Conducted physical surveillance and social media analysis to prove a claimant was actively participating in contact sports.",
      outcome: "Claim denied. Fraud documented."
    },
    {
      cat: "Executive Check",
      title: "Undisclosed Liabilities",
      desc: "Discovered a CEO candidate's involvement in an ongoing class-action lawsuit under a different legal entity.",
      outcome: "Offer rescinded. Partnership dissolved."
    },
    {
      cat: "Matrimonial",
      title: "Asset Verification",
      desc: "Located hidden real estate properties and undisclosed business equity prior to high-net-worth marriage proceedings.",
      outcome: "Assets documented. Client protected."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Case Studies</h2>
            <p className="text-muted-foreground">De-identified summaries of recent operational successes. Real names and identifying details have been removed to protect client confidentiality.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg overflow-hidden group"
            >
              <div className="p-8">
                <div className="text-xs font-mono font-semibold text-primary uppercase tracking-wider mb-3">
                  {c.cat}
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {c.desc}
                </p>
                <div className="p-4 bg-secondary rounded flex items-start gap-3 border border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <p className="text-sm font-medium text-foreground">
                    <span className="text-muted-foreground font-normal">Outcome: </span> 
                    {c.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
