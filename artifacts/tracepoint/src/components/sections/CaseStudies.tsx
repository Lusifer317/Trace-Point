import React from "react";
import { motion } from "framer-motion";

export default function CaseStudies() {
  const cases = [
    {
      cat: "Corporate Fraud",
      title: "Internal Financial Misconduct",
      desc: "Recovered deleted communications and traced offshore accounts to prove embezzlement by a regional director.",
      outcome: "₹4.2 Cr recovered. Prosecution successful."
    },
    {
      cat: "Due Diligence",
      title: "High-Risk Supplier Engagement",
      desc: "Uncovered undisclosed political affiliations and prior bankruptcies of a key vendor before a major contract signing.",
      outcome: "Contract aborted. Risk averted."
    },
    {
      cat: "Online Money Recovery",
      title: "UPI Impersonation Fraud",
      desc: "A Hyderabad-based retailer received a call from someone posing as a bank official asking to 'reverse an erroneous credit.' They were guided into approving a screen share and transferring ₹11.8 Lakhs. We traced the beneficiary chain across three mule accounts, filed a complaint with the National Cybercrime Portal, and coordinated a bank freeze request within 36 hours.",
      outcome: "₹9.4 Lakhs frozen and recovered. FIR filed."
    },
    {
      cat: "Sextortion",
      title: "WhatsApp Honey Trap",
      desc: "A mid-level executive was befriended on Instagram by a profile that quickly moved the conversation to WhatsApp, recorded an intimate video call, and demanded ₹3 Lakhs with threats to forward the recording to his employer and family. We identified the perpetrator's digital footprint, advised against payment, helped draft a legal response, and supported an FIR that led to the suspect's arrest in another state.",
      outcome: "Perpetrator arrested. Harassment stopped."
    },
    {
      cat: "Investment Scam",
      title: "Fake Trading Platform",
      desc: "A client invested ₹18 Lakhs into a platform promoted via a WhatsApp group that showed consistent 'returns' on a custom app. When she attempted withdrawal, the platform disappeared. We traced the domain registrations, payment gateways, and call centre SIM cards to operators in Rajasthan, and compiled a comprehensive FIR dossier.",
      outcome: "FIR filed. Case referred to ED for asset recovery."
    },
    {
      cat: "Cyber Forensics",
      title: "Insider Data Exfiltration",
      desc: "Analyzed server logs to identify a departing engineer transferring proprietary algorithms to a personal cloud storage account over a period of three weeks.",
      outcome: "Perpetrator identified. IP secured. Employment terminated for cause."
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Case Studies</h2>
            <p className="text-muted-foreground">
              De-identified summaries of recent cases. All names, dates, and identifying details
              have been removed or altered to protect client confidentiality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-card border border-border rounded-lg overflow-hidden"
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
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
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
