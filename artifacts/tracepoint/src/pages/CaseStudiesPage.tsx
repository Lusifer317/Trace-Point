import React from "react";
import CaseStudies from "@/components/sections/CaseStudies";

export default function CaseStudiesPage() {
  return (
    <div className="pt-20">
      <div className="bg-background border-b border-border py-16">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Our work</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Case Studies</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            De-identified summaries of cases we have handled. All names, dates, and identifying
            details have been removed or altered to protect client confidentiality.
          </p>
        </div>
      </div>
      <CaseStudies />
    </div>
  );
}
