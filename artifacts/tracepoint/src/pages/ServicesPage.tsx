import React from "react";
import Services from "@/components/sections/Services";

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="bg-background border-b border-border py-16">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">What we do</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Investigative solutions for legal teams, corporations, and individuals —
            including people targeted by online fraud, blackmail, or financial scams.
          </p>
        </div>
      </div>
      <Services />
    </div>
  );
}
