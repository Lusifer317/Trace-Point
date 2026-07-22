import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ChevronRight } from "lucide-react";
import type { ServiceData } from "@/data/servicesData";

interface Props {
  service: ServiceData | null;
  onClose: () => void;
}

export default function ServiceStoryModal({ service, onClose }: Props) {
  const [phase, setPhase] = useState<"situation" | "steps" | "outcome">("situation");
  const [visibleSteps, setVisibleSteps] = useState(0);

  // Reset and auto-advance whenever a new service opens
  useEffect(() => {
    if (!service) return;
    setPhase("situation");
    setVisibleSteps(0);
  }, [service]);

  // Auto-sequence: situation → steps → outcome
  useEffect(() => {
    if (!service) return;

    if (phase === "situation") {
      const t = setTimeout(() => setPhase("steps"), 1800);
      return () => clearTimeout(t);
    }

    if (phase === "steps") {
      if (visibleSteps < service.steps.length) {
        const t = setTimeout(() => setVisibleSteps((v) => v + 1), 600);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("outcome"), 700);
        return () => clearTimeout(t);
      }
    }
  }, [phase, visibleSteps, service]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const skip = () => {
    setPhase("outcome");
    setVisibleSteps(service?.steps.length ?? 0);
  };

  return (
    <AnimatePresence>
      {service && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 340, damping: 32 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between p-7 pb-5 border-b border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-primary uppercase tracking-widest mb-0.5">
                      {service.category}
                    </p>
                    <h2 className="text-xl font-serif font-bold text-foreground leading-tight">
                      {service.title}
                    </h2>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1 ml-4 shrink-0"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Story body */}
              <div className="p-7 flex flex-col gap-8 flex-grow">

                {/* — Situation — */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-5 h-5 rounded-full bg-foreground/10 text-muted-foreground text-[10px] font-bold flex items-center justify-center">1</span>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">The situation</span>
                  </div>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-base text-foreground/80 leading-relaxed"
                  >
                    {service.situation}
                  </motion.p>
                </div>

                {/* — What we do — */}
                <AnimatePresence>
                  {(phase === "steps" || phase === "outcome") && (
                    <motion.div
                      key="steps-section"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-5 h-5 rounded-full bg-foreground/10 text-muted-foreground text-[10px] font-bold flex items-center justify-center">2</span>
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">What we do</span>
                      </div>

                      <div className="relative pl-4 flex flex-col gap-0">
                        {/* Vertical line */}
                        <div className="absolute left-0 top-3 bottom-3 w-px bg-border" />

                        {service.steps.map((step, i) => (
                          <AnimatePresence key={i}>
                            {i < visibleSteps && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="relative flex gap-4 pb-5 last:pb-0"
                              >
                                {/* Dot */}
                                <div className="absolute -left-[15px] top-1 w-[7px] h-[7px] rounded-full bg-primary shrink-0" />

                                {/* Content */}
                                <div className="ml-2">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-primary">{step.icon}</span>
                                    <span className="text-sm font-semibold text-foreground">{step.label}</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* — Outcome — */}
                <AnimatePresence>
                  {phase === "outcome" && (
                    <motion.div
                      key="outcome"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] font-bold flex items-center justify-center">3</span>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">What you get</span>
                      </div>
                      <div className="rounded-xl bg-primary/5 border border-primary/15 p-5">
                        <p className="text-sm text-foreground/85 leading-relaxed">{service.outcome}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer CTA */}
              <div className="p-7 pt-0 flex items-center gap-3 flex-wrap">
                {phase !== "outcome" && (
                  <button
                    onClick={skip}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    Skip to result <ChevronRight size={14} />
                  </button>
                )}
                {phase === "outcome" && (
                  <a
                    href="/#contact"
                    onClick={onClose}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm"
                  >
                    Talk to us about this <ArrowRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
