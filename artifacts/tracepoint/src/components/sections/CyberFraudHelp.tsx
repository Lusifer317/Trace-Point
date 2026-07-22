import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Wallet, HeartCrack, TrendingDown, CreditCard, Globe,
  MessageCircleWarning, PhoneOff, ChevronRight, Phone
} from "lucide-react";

const scenarios = [
  {
    icon: <Wallet size={26} />,
    trigger: "I transferred money to someone and got cheated",
    problem: "UPI fraud, fake customer care calls, OTP theft, KYC scams, screen-share tricks — you've been manipulated into sending money.",
    action: "We trace the payment trail, file a complaint with the National Cybercrime Portal, and request an urgent bank freeze before the money moves further.",
    urgent: true,
  },
  {
    icon: <HeartCrack size={26} />,
    trigger: "Someone is threatening to share my photos or videos",
    problem: "You were befriended online, tricked into an intimate video call, and now being extorted. Or someone is misusing old photos.",
    action: "Do not pay. We identify and locate the perpetrator, help you file an FIR, and guide you on getting the content taken down legally.",
    urgent: true,
  },
  {
    icon: <TrendingDown size={26} />,
    trigger: "I put money into a trading app and now I can't withdraw",
    problem: "Fake stock or crypto platforms that show 'profits' on a custom app — then disappear or demand more money when you try to withdraw.",
    action: "We trace domain registrations, payment gateways, and operators behind the platform and package everything needed for a police complaint and possible ED referral.",
    urgent: false,
  },
  {
    icon: <MessageCircleWarning size={26} />,
    trigger: "Someone is harassing or stalking me online",
    problem: "Threatening messages, repeated abusive calls, someone monitoring your activity, or a coordinated abuse campaign on social media.",
    action: "We document the evidence properly, identify anonymous accounts, and support you in filing under the IT Act and IPC sections covering cyber harassment and stalking.",
    urgent: false,
  },
  {
    icon: <Globe size={26} />,
    trigger: "Someone made a fake profile using my name or photos",
    problem: "A fake account is impersonating you, contacting your friends, family, or colleagues — or being used to run scams in your name.",
    action: "We identify who created the account, support the takedown process across platforms, and help file a police complaint if identity theft is involved.",
    urgent: false,
  },
  {
    icon: <PhoneOff size={26} />,
    trigger: "I was cheated by a fake job or romantic profile",
    problem: "You paid a 'registration fee' for a job that doesn't exist, or someone you trusted online asked for money and then disappeared.",
    action: "We investigate the operators behind fake job portals or romance scam networks, and compile evidence for an FIR that actually goes somewhere.",
    urgent: false,
  },
  {
    icon: <CreditCard size={26} />,
    trigger: "My bank account or card was used without my knowledge",
    problem: "Unauthorised transactions on your account — card cloning, SIM swap fraud, or someone got access to your net banking.",
    action: "We work with you to document the fraud trail, file timely complaints with your bank and cybercrime cell, and support your chargeback or recovery claim.",
    urgent: true,
  },
  {
    icon: <Globe size={26} />,
    trigger: "I sent money abroad and realised it was a scam",
    problem: "International wire transfer fraud, fake overseas job placements, or a business partner who turned out to be fraudulent.",
    action: "We trace cross-border payment routes, file complaints with relevant agencies, and coordinate with our partner investigators in other jurisdictions where applicable.",
    urgent: false,
  },
];

export default function CyberFraudHelp() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="cyber-fraud-help" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="max-w-3xl mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Cyber Fraud Help</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">
            Has something like this happened to you?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Online fraud is more common than most people admit — and the shame of it stops many victims
            from getting help. We've handled hundreds of cases. There is no judgment here.
          </p>
        </div>

        {/* Time-sensitive note */}
        <div className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg mb-12 max-w-2xl">
          <Phone size={18} className="text-destructive mt-0.5 shrink-0" />
          <p className="text-sm text-foreground">
            <span className="font-semibold">If you lost money in the last 24–48 hours:</span>{" "}
            contact us immediately. There is a short window to freeze beneficiary accounts
            before funds are transferred again. Time is critical.
          </p>
        </div>

        {/* Scenario cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {scenarios.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full text-left p-6 flex items-start gap-4 hover:bg-white/[0.02] transition-colors"
              >
                <div className={`w-11 h-11 rounded flex items-center justify-center shrink-0 mt-0.5 ${
                  s.urgent ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"
                }`}>
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-semibold text-foreground text-base leading-snug">{s.trigger}</p>
                    <ChevronRight
                      size={18}
                      className={`text-muted-foreground shrink-0 mt-0.5 transition-transform ${expanded === i ? "rotate-90" : ""}`}
                    />
                  </div>
                  {s.urgent && (
                    <span className="mt-2 inline-block text-[11px] font-medium text-destructive uppercase tracking-wider">
                      Act fast — time sensitive
                    </span>
                  )}
                </div>
              </button>

              {expanded === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6 border-t border-border"
                >
                  <div className="pt-5 space-y-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">What happened</p>
                      <p className="text-sm text-foreground/80 leading-relaxed">{s.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">What we can do</p>
                      <p className="text-sm text-foreground/80 leading-relaxed">{s.action}</p>
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded hover:bg-primary/90 transition-colors"
                    >
                      Get Help <ChevronRight size={15} />
                    </a>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-card border border-border rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
              Not sure if what happened to you is something we can help with?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Tell us what happened. The first conversation is free, confidential, and carries no obligation.
              We'll tell you honestly what evidence exists, what options are available, and what outcome
              is realistically possible — before you commit to anything.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <a
              href="#contact"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors text-center whitespace-nowrap"
            >
              Talk to Us — It's Free
            </a>
            <p className="text-xs text-muted-foreground text-center">Available 24/7 for urgent cases</p>
          </div>
        </div>

      </div>
    </section>
  );
}
