import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Building2, UserCheck, Wallet, HeartCrack, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: <Building2 size={22} />,
    title: "Corporate Intelligence",
    desc: "Due diligence, vendor verification, executive background checks, and fraud investigations for businesses.",
    href: "/services",
  },
  {
    icon: <UserCheck size={22} />,
    title: "Private Investigation",
    desc: "Matrimonial checks, missing persons, asset tracing, and surveillance for individuals.",
    href: "/services",
  },
  {
    icon: <Wallet size={22} />,
    title: "Online Money Recovery",
    desc: "UPI fraud, banking scams, investment platform fraud — we trace payments and support recovery.",
    href: "/services",
  },
  {
    icon: <HeartCrack size={22} />,
    title: "Blackmail & Sextortion",
    desc: "If someone is threatening to share your photos or videos — do not pay. We can help.",
    href: "/services",
  },
];

export default function ServicesTeaser() {
  return (
    <section className="py-20 bg-secondary border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
              What we handle
            </h2>
            <p className="text-muted-foreground">
              From corporate fraud to individual cyber crime — a brief look at our areas of work.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors shrink-0"
          >
            See all services <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Link
                href={item.href}
                className="block h-full bg-card border border-border rounded-lg p-6 hover:border-foreground/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded bg-background text-muted-foreground group-hover:text-foreground flex items-center justify-center mb-5 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
