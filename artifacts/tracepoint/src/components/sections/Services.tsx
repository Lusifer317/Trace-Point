import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, Search, UserCheck, ShieldAlert, FileSearch,
  Users, UserMinus, Building, Eye, Fingerprint,
  MailWarning, UserX, AlertTriangle, Database, FileWarning,
  CreditCard, MessageCircleWarning, TrendingDown, ShieldBan,
  Wallet, HeartCrack, PhoneOff, Globe,
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type Category = "Corporate" | "Private" | "Cyber" | "Cyber Fraud";

const services = [
  // Corporate
  { id: "c1", category: "Corporate" as Category, icon: <Building2 size={22} />, title: "Due Diligence", desc: "Comprehensive background analysis of businesses before mergers, acquisitions, or partnerships." },
  { id: "c2", category: "Corporate" as Category, icon: <FileSearch size={22} />, title: "Vendor Verification", desc: "Rigorous vetting of suppliers and third-party vendors to prevent fraud and compliance risks." },
  { id: "c3", category: "Corporate" as Category, icon: <UserCheck size={22} />, title: "Executive Background", desc: "Deep verification of C-level candidates' credentials, history, and undisclosed liabilities." },
  { id: "c4", category: "Corporate" as Category, icon: <AlertTriangle size={22} />, title: "Investment Risk", desc: "Risk assessment and intelligence gathering for private equity and venture capital decisions." },
  { id: "c5", category: "Corporate" as Category, icon: <ShieldAlert size={22} />, title: "Corporate Fraud", desc: "Internal investigations into embezzlement, kickbacks, and financial irregularities." },

  // Private
  { id: "p1", category: "Private" as Category, icon: <Users size={22} />, title: "Matrimonial Investigations", desc: "Pre and post-matrimonial background checks, asset verification, and fidelity investigations." },
  { id: "p2", category: "Private" as Category, icon: <UserMinus size={22} />, title: "Missing Persons", desc: "Advanced tracing techniques to locate absconding debtors, witnesses, or family members." },
  { id: "p3", category: "Private" as Category, icon: <Building size={22} />, title: "Asset Verification", desc: "Identifying hidden real estate, financial accounts, and business interests." },
  { id: "p4", category: "Private" as Category, icon: <Eye size={22} />, title: "Surveillance Operations", desc: "Discreet, legal physical surveillance conducted by trained operatives." },
  { id: "p5", category: "Private" as Category, icon: <Search size={22} />, title: "Background Verification", desc: "Verification of identity, education, employment, and criminal history." },

  // Cyber (enterprise-focused)
  { id: "cy1", category: "Cyber" as Category, icon: <Fingerprint size={22} />, title: "Digital Forensics", desc: "Data recovery and analysis from computers, mobile devices, and servers for legal evidence." },
  { id: "cy2", category: "Cyber" as Category, icon: <MailWarning size={22} />, title: "Email Fraud (BEC)", desc: "Tracing business email compromise, phishing attacks, and corporate spoofing sources." },
  { id: "cy3", category: "Cyber" as Category, icon: <UserX size={22} />, title: "Insider Threats", desc: "Identifying employees exfiltrating data or compromising corporate intellectual property." },
  { id: "cy4", category: "Cyber" as Category, icon: <Database size={22} />, title: "Data Theft", desc: "Investigating the unauthorized copying, transfer, or retrieval of confidential information." },
  { id: "cy5", category: "Cyber" as Category, icon: <FileWarning size={22} />, title: "Insurance Fraud", desc: "Digital verification and social media intelligence to expose fraudulent claims." },

  // Cyber Fraud (individual/consumer-focused)
  {
    id: "cf1", category: "Cyber Fraud" as Category, icon: <Wallet size={22} />, title: "Online Money Recovery",
    desc: "If you have lost money through UPI fraud, fake customer care calls, screen-share scams, or bank impersonation, we trace the transaction chain, file complaints with the National Cybercrime Portal, and assist in civil and legal recovery proceedings."
  },
  {
    id: "cf2", category: "Cyber Fraud" as Category, icon: <HeartCrack size={22} />, title: "Sextortion & Online Blackmail",
    desc: "We handle cases involving intimate image threats, honey trap scams, and WhatsApp-based blackmail. We identify and locate perpetrators, support FIR filing, and advise on takedown of circulated content — without paying the blackmailer."
  },
  {
    id: "cf3", category: "Cyber Fraud" as Category, icon: <TrendingDown size={22} />, title: "Investment Scam Investigation",
    desc: "We investigate losses from fake stock trading apps, fraudulent crypto platforms, Ponzi scheme operators, and SEBI-unregistered advisors. We document fraud trails to support police complaints and civil recovery."
  },
  {
    id: "cf4", category: "Cyber Fraud" as Category, icon: <CreditCard size={22} />, title: "UPI & Banking Fraud",
    desc: "Covers fraudulent UPI transfers, KYC scams, OTP theft, loan app fraud, and debit/credit card cloning. We work with you to file timely complaints, freeze beneficiary accounts, and trace fund movement before the trail goes cold."
  },
  {
    id: "cf5", category: "Cyber Fraud" as Category, icon: <Globe size={22} />, title: "Social Media Impersonation",
    desc: "Investigation of fake accounts created using your identity, deepfake profile misuse, and fraudulent pages that harm your reputation or solicit money from your contacts. Includes platform takedown support and perpetrator identification."
  },
  {
    id: "cf6", category: "Cyber Fraud" as Category, icon: <MessageCircleWarning size={22} />, title: "Cyber Harassment",
    desc: "Sustained online harassment, stalking via social media, threatening messages, and coordinated abuse campaigns. We document evidence, identify anonymous accounts, and support legal proceedings under the IT Act and IPC."
  },
  {
    id: "cf7", category: "Cyber Fraud" as Category, icon: <PhoneOff size={22} />, title: "Romance & Job Scams",
    desc: "We investigate fake romantic profiles used to extract money, as well as fraudulent job offers that collect fees or personal data. Perpetrator identification and evidence packaging for FIR filing."
  },
  {
    id: "cf8", category: "Cyber Fraud" as Category, icon: <ShieldBan size={22} />, title: "Cyber Fraud Intelligence",
    desc: "Proactive threat intelligence for businesses — identifying fake vendors, fraudulent payment portals, scam call centres, and impersonation of your brand online before financial damage occurs."
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<Category | "All">("All");
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const tabs: (Category | "All")[] = ["All", "Corporate", "Private", "Cyber", "Cyber Fraud"];
  const filteredServices = activeTab === "All" ? services : services.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            Investigative solutions for legal teams, corporations, and private clients —
            including individuals who have been targeted by online fraud, blackmail, or financial scams.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded text-sm font-medium transition-all border ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-foreground border-border hover:border-foreground/30"
              }`}
            >
              {tab === "All" ? "All services" : tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.18 }}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer bg-card border border-border rounded-lg p-7 hover:border-foreground/25 transition-colors flex flex-col h-full"
              >
                <div className="w-10 h-10 rounded bg-background text-muted-foreground group-hover:text-foreground flex items-center justify-center mb-5 transition-colors">
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow line-clamp-3">{service.desc}</p>

                <div className="mt-5 text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {service.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <div className="w-10 h-10 rounded bg-background text-muted-foreground flex items-center justify-center mb-4">
              {selectedService?.icon}
            </div>
            <DialogTitle className="text-xl font-serif">{selectedService?.title}</DialogTitle>
            <DialogDescription className="text-base pt-2 text-muted-foreground leading-relaxed">
              {selectedService?.desc}
            </DialogDescription>
          </DialogHeader>
          <div className="pt-4 border-t border-border mt-4">
            <p className="text-sm text-foreground/80 mb-6">
              All cases begin with a confidential consultation. Our team will assess what evidence
              exists, what legal remedies are available, and what realistic outcomes to expect —
              before you commit to anything.
            </p>
            <button className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors">
              Request a Consultation
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
