import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const team = [
    {
      role: "Director of Investigations",
      background: "Former IPS officer with 18 years in economic offences and organised crime units.",
    },
    {
      role: "Head of Digital Forensics",
      background: "Certified CHFI examiner. Previously led cyber forensics for a national insurance group.",
    },
    {
      role: "Senior Corporate Analyst",
      background: "Decade of due diligence work for private equity firms across South and Southeast Asia.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">About the Firm</h2>
              <div className="w-16 h-0.5 bg-primary" />
            </div>

            <p className="text-muted-foreground leading-relaxed">
              TracePoint Intelligence is a licensed private investigation and corporate risk firm
              headquartered in Hyderabad. Since 2014, we have served legal departments,
              HR teams, financial institutions, and private clients who need reliable, court-ready findings.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our investigators include former law enforcement officers, certified digital forensics
              examiners, and corporate analysts. Every case is handled within the boundaries of Indian law,
              with findings documented to evidentiary standard.
            </p>

            <div className="pt-4">
              <p className="text-sm font-medium text-foreground mb-3">We are known for:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">–</span>
                  Strict non-disclosure from first contact
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">–</span>
                  Reports written for use in legal proceedings
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">–</span>
                  Operations across all major Indian cities
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">Key Team Members</h3>
            <div className="space-y-6">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-l-2 border-border pl-6 py-1"
                >
                  <h4 className="font-semibold text-foreground mb-1">{member.role}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.background}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
