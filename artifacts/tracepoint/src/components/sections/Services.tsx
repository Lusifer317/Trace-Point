import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, Search, UserCheck, ShieldAlert, FileSearch, 
  Users, UserMinus, Building, Eye, Fingerprint, 
  MailWarning, UserX, AlertTriangle, Database, FileWarning, ArrowRight
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type Category = "Corporate" | "Private" | "Cyber";

const services = [
  // Corporate
  { id: "c1", category: "Corporate", icon: <Building2 size={24} />, title: "Due Diligence", desc: "Comprehensive background analysis of businesses before mergers, acquisitions, or partnerships." },
  { id: "c2", category: "Corporate", icon: <FileSearch size={24} />, title: "Vendor Verification", desc: "Rigorous vetting of suppliers and third-party vendors to prevent fraud and compliance risks." },
  { id: "c3", category: "Corporate", icon: <UserCheck size={24} />, title: "Executive Background", desc: "Deep-dive verification of C-level candidates' credentials, history, and undisclosed liabilities." },
  { id: "c4", category: "Corporate", icon: <AlertTriangle size={24} />, title: "Investment Risk", desc: "Detailed risk assessment and intelligence gathering for private equity and venture capital." },
  { id: "c5", category: "Corporate", icon: <ShieldAlert size={24} />, title: "Corporate Fraud", desc: "Internal investigations into embezzlement, kickbacks, and financial irregularities." },
  
  // Private
  { id: "p1", category: "Private", icon: <Users size={24} />, title: "Matrimonial Investigations", desc: "Pre and post-matrimonial background checks, asset verification, and fidelity investigations." },
  { id: "p2", category: "Private", icon: <UserMinus size={24} />, title: "Missing Persons", desc: "Advanced tracing techniques to locate absconding debtors, witnesses, or family members." },
  { id: "p3", category: "Private", icon: <Building size={24} />, title: "Asset Verification", desc: "Identifying hidden real estate, financial accounts, and business interests globally." },
  { id: "p4", category: "Private", icon: <Eye size={24} />, title: "Surveillance Operations", desc: "Discreet, legal physical surveillance conducted by trained operatives." },
  { id: "p5", category: "Private", icon: <Search size={24} />, title: "Background Verification", desc: "Verification of identity, education, employment, and criminal history." },

  // Cyber
  { id: "cy1", category: "Cyber", icon: <Fingerprint size={24} />, title: "Digital Forensics", desc: "Data recovery and analysis from computers, mobile devices, and servers for legal evidence." },
  { id: "cy2", category: "Cyber", icon: <MailWarning size={24} />, title: "Email Fraud", desc: "Tracing business email compromise (BEC), phishing attacks, and spoofing sources." },
  { id: "cy3", category: "Cyber", icon: <UserX size={24} />, title: "Insider Threats", desc: "Identifying employees exfiltrating data or compromising corporate intellectual property." },
  { id: "cy4", category: "Cyber", icon: <Database size={24} />, title: "Data Theft", desc: "Investigating the unauthorized copying, transfer, or retrieval of confidential information." },
  { id: "cy5", category: "Cyber", icon: <FileWarning size={24} />, title: "Insurance Fraud", desc: "Digital verification and social media intelligence to expose fraudulent claims." },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<Category | "All">("All");
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const filteredServices = activeTab === "All" ? services : services.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4"
          >
            Intelligence Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            Specialized investigative solutions tailored for legal teams, corporations, and private individuals requiring absolute discretion.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["All", "Corporate", "Private", "Cyber"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as Category | "All")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab 
                  ? "bg-primary text-primary-foreground shadow-[0_0_10px_rgba(212,175,55,0.4)]" 
                  : "bg-background text-foreground hover:bg-white/5 border border-border"
              }`}
            >
              {tab === "All" ? "All Services" : `${tab} Intelligence`}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer bg-card/80 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-primary/50 transition-colors relative overflow-hidden flex flex-col h-full"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{service.desc}</p>
                
                <div className="mt-6 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
              {selectedService?.icon}
            </div>
            <DialogTitle className="text-2xl font-serif">{selectedService?.title}</DialogTitle>
            <DialogDescription className="text-base pt-2 text-muted-foreground leading-relaxed">
              {selectedService?.desc}
            </DialogDescription>
          </DialogHeader>
          <div className="pt-4 border-t border-border mt-4">
            <p className="text-sm text-foreground/80 mb-6">
              Our {selectedService?.category.toLowerCase()} operatives utilize advanced methodologies and proprietary databases to deliver actionable intelligence with strict adherence to legal compliance.
            </p>
            <button className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors">
              Request this Service
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
