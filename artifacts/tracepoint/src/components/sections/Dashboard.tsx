import React from "react";
import { motion } from "framer-motion";
import { Activity, AlertTriangle, Users, FileCheck } from "lucide-react";

export default function Dashboard() {
  return (
    <section className="py-24 bg-background border-y border-border overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-2xl font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Command Center Analytics
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Panel: Stats */}
          <div className="lg:col-span-3 bg-card border border-border rounded-lg p-6 space-y-6">
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider border-b border-border pb-2">Case Volume (YTD)</h3>
            <div className="space-y-4 pt-2">
              {[
                { label: "Corporate", val: 65, color: "bg-primary" },
                { label: "Cyber", val: 82, color: "bg-accent" },
                { label: "Private", val: 45, color: "bg-muted-foreground" },
                { label: "Due Diligence", val: 90, color: "bg-primary" }
              ].map((item, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-foreground">{item.label}</span>
                    <span className="text-muted-foreground">{item.val}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-black/40 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.val}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Panel: Map (simplified CSS approach for this component) */}
          <div className="lg:col-span-6 bg-card border border-border rounded-lg p-6 flex flex-col items-center justify-center relative min-h-[300px] overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
              backgroundImage: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.2) 0%, transparent 70%)'
            }} />
            
            {/* Very simple abstract map representation using grid of dots */}
            <div className="w-full h-full relative grid grid-cols-12 grid-rows-8 gap-2 opacity-30">
              {Array.from({ length: 96 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-muted-foreground rounded-full mx-auto my-auto" />
              ))}
            </div>

            {/* Simulated Indian Cities */}
            {[
              { top: "40%", left: "30%", name: "Mumbai" },
              { top: "30%", left: "40%", name: "Delhi" },
              { top: "60%", left: "45%", name: "Hyderabad" },
              { top: "70%", left: "40%", name: "Bangalore" },
              { top: "75%", left: "50%", name: "Chennai" },
            ].map((city, i) => (
              <div key={i} className="absolute" style={{ top: city.top, left: city.left }}>
                <div className="relative">
                  <div className="w-2 h-2 bg-primary rounded-full relative z-10" />
                  <div className="w-6 h-6 bg-primary/30 rounded-full absolute -top-2 -left-2 animate-ping" />
                  <div className="absolute top-3 left-3 text-[10px] font-mono text-muted-foreground">{city.name}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Panel: Live Feed */}
          <div className="lg:col-span-3 bg-card border border-border rounded-lg p-0 flex flex-col overflow-hidden h-[300px]">
            <div className="p-4 border-b border-border bg-black/20">
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                <Activity size={14} className="text-accent" />
                Live Feed
              </h3>
            </div>
            <div className="p-4 space-y-4 overflow-hidden relative flex-grow font-mono text-xs">
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent z-10 pointer-events-none" />
              
              <div className="space-y-3 animate-[slideUp_15s_linear_infinite]">
                <div className="text-muted-foreground"><span className="text-primary">[14:02]</span> Case #4092 closed.</div>
                <div className="text-muted-foreground"><span className="text-accent">[14:05]</span> Asset trace initiated.</div>
                <div className="text-muted-foreground"><span className="text-destructive">[14:12]</span> Risk alert: Red Flag on Vendor ID 77X.</div>
                <div className="text-muted-foreground"><span className="text-primary">[14:18]</span> Surveillance op deployed (Zone 4).</div>
                <div className="text-muted-foreground"><span className="text-accent">[14:22]</span> Digital extraction complete.</div>
                <div className="text-muted-foreground"><span className="text-primary">[14:30]</span> Report generated for Client B.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {[
            { label: "Active Cases", val: "23", icon: <Activity size={18} className="text-accent" /> },
            { label: "Closed (Month)", val: "47", icon: <FileCheck size={18} className="text-primary" /> },
            { label: "Risk Alerts", val: "3", icon: <AlertTriangle size={18} className="text-destructive" /> },
            { label: "Client Satisfaction", val: "97%", icon: <Users size={18} className="text-primary" /> }
          ].map((metric, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-4 flex items-center justify-between">
              <div>
                <div className="text-2xl font-mono text-foreground">{metric.val}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{metric.label}</div>
              </div>
              <div className="bg-background p-2 rounded-md">
                {metric.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
