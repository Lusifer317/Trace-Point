import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services, type Category } from "@/data/servicesData";
import ServiceStoryModal from "@/components/ServiceStoryModal";
import type { ServiceData } from "@/data/servicesData";

export default function Services() {
  const [activeTab, setActiveTab] = useState<Category | "All">("All");
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

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
            Click any service to see the situation we handle and how we approach it.
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
              <motion.button
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.18 }}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer bg-card border border-border rounded-lg p-7 hover:border-foreground/25 transition-all text-left flex flex-col h-full hover:shadow-lg"
              >
                <div className="w-10 h-10 rounded bg-background text-muted-foreground group-hover:text-foreground flex items-center justify-center mb-5 transition-colors">
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow line-clamp-3">
                  {service.desc}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">{service.category}</span>
                  <span className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    See how we help →
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ServiceStoryModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
