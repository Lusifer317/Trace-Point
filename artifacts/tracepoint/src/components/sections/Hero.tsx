import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Lock } from "lucide-react";
import WorldMapCanvas from "../WorldMapCanvas";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background and Canvas */}
      <WorldMapCanvas />
      
      {/* Mouse Follow Gradient */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-50"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.1), transparent 40%)`
        }}
      />
      
      {/* Static Gradient Overlay */}
      <div className="absolute inset-0 bg-background/80 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-background z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono tracking-wider text-muted-foreground uppercase">Confidential | Hyderabad, India</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight"
          >
            Uncover What <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Others Miss.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
          >
            Corporate Intelligence, Cyber Investigations, Due Diligence & Professional Private Investigation Services Across India.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]">
              Request Consultation
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-border text-foreground font-semibold rounded hover:bg-white/5 transition-all">
              Explore Services
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50"
          >
            {[
              { value: "500+", label: "Cases" },
              { value: "95%", label: "Success Rate" },
              { value: "24/7", label: "Response" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-serif font-bold text-foreground">{stat.value}</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Dashboard Widget */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-[45%] hidden md:block"
        >
          <div className="bg-card/50 backdrop-blur-xl border border-border rounded-lg p-6 shadow-2xl relative overflow-hidden">
            {/* Widget header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <div className="flex items-center gap-3">
                <Shield className="text-primary" size={20} />
                <span className="font-mono text-sm uppercase tracking-wider text-foreground">Active Monitoring</span>
              </div>
              <div className="flex gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/80 animate-pulse" />
                <span className="w-2.5 h-2.5 rounded-full bg-primary/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent/80" />
              </div>
            </div>

            {/* Fictional Metrics */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-muted-foreground">
                  <span>Threat Level</span>
                  <span className="text-primary">ELEVATED</span>
                </div>
                <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[75%] rounded-full relative">
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] animate-[scan_2s_infinite]" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/20 p-4 rounded border border-white/5">
                  <Globe className="text-muted-foreground mb-2" size={16} />
                  <div className="text-2xl font-mono text-foreground mb-1">12,408</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Data Points Scanned</div>
                </div>
                <div className="bg-black/20 p-4 rounded border border-white/5">
                  <Lock className="text-muted-foreground mb-2" size={16} />
                  <div className="text-2xl font-mono text-foreground mb-1">47</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Encrypted Channels</div>
                </div>
              </div>

              {/* Scrolling Log */}
              <div className="bg-black/40 rounded border border-white/5 p-3 font-mono text-xs text-muted-foreground/80 h-24 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10 pointer-events-none" />
                <div className="space-y-2 animate-[slideUp_10s_linear_infinite]">
                  <div><span className="text-primary">[SYS]</span> Initializing deep scan protocol...</div>
                  <div><span className="text-accent">[NET]</span> Connecting to secure nodes...</div>
                  <div><span className="text-primary">[SYS]</span> Analyzing financial records...</div>
                  <div><span className="text-destructive">[WRN]</span> Anomalous transaction detected.</div>
                  <div><span className="text-accent">[NET]</span> Encrypting outbound traffic...</div>
                  <div><span className="text-primary">[SYS]</span> Cross-referencing background data...</div>
                  <div><span className="text-primary">[SYS]</span> Audit trail verified.</div>
                  <div><span className="text-accent">[NET]</span> Secure connection established.</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
