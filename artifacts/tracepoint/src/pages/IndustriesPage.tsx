import React from "react";
import Industries from "@/components/sections/Industries";

export default function IndustriesPage() {
  return (
    <div className="pt-20">
      <div className="bg-background border-b border-border py-16">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Who we work with</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Industries We Serve</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We work across sectors where risk, fraud, and the need for verified information are
            most acute. Domain expertise shapes how we approach each case.
          </p>
        </div>
      </div>
      <Industries />
    </div>
  );
}
