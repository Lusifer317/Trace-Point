import React from "react";
import Process from "@/components/sections/Process";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function ProcessPage() {
  return (
    <div className="pt-20">
      <div className="bg-background border-b border-border py-16">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">How we work</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Investigation Process</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A methodical, legal, and results-driven approach to every case —
            from first contact to final report.
          </p>
        </div>
      </div>

      <Process />

      {/* CTA */}
      <div className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12 max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Ready to start?
          </h2>
          <p className="text-muted-foreground mb-8">
            The first conversation is free and carries no obligation. Tell us what you're
            dealing with and we'll tell you honestly what we can do.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors"
          >
            Get in Touch <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
