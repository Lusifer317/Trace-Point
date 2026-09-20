import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.get("fullName"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          investigationType: formData.get("investigationType"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      if (!response.ok) {
        throw new Error("The request could not be submitted.");
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setError("We could not send your request. Please try again or contact us by email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-card/30 pointer-events-none skew-x-12 translate-x-1/4" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto bg-card/80 backdrop-blur-xl border border-border rounded-xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-5">
            
            {/* Contact Info */}
            <div className="md:col-span-2 bg-black/40 p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Secure Channel</h3>
                <p className="text-sm text-muted-foreground mb-8">All communications are strictly confidential and protected by non-disclosure protocols from first contact.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Headquarters</h4>
                      <p className="text-sm text-muted-foreground mt-1">Financial District, Nanakramguda<br/>Hyderabad, Telangana 500032</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-primary" size={20} />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Email</h4>
                      <p className="text-sm text-muted-foreground mt-1">contact@tracepointintel.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-primary" size={20} />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Priority Line</h4>
                      <p className="text-sm text-muted-foreground mt-1">+91 40 XXXX XXXX</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-3 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <Clock className="text-primary" size={20} />
                <span className="text-sm font-medium text-foreground">Available 24/7 for urgent matters</span>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3 p-10">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground">Message Received</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Your inquiry has been securely transmitted. A senior investigator will contact you within 2 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80">Full Name *</label>
                        <input required name="fullName" type="text" autoComplete="name" maxLength={120} className="w-full bg-background/50 border border-border rounded px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80">Company / Firm</label>
                        <input name="company" type="text" autoComplete="organization" maxLength={160} className="w-full bg-background/50 border border-border rounded px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80">Email Address *</label>
                        <input required name="email" type="email" autoComplete="email" maxLength={254} className="w-full bg-background/50 border border-border rounded px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80">Phone Number *</label>
                        <input required name="phone" type="tel" autoComplete="tel" maxLength={40} className="w-full bg-background/50 border border-border rounded px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Investigation Type</label>
                    <select name="investigationType" className="w-full bg-background/50 border border-border rounded px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="" className="bg-card text-muted-foreground">Select area of concern...</option>
                      <option value="corporate" className="bg-card">Corporate Due Diligence / Fraud</option>
                      <option value="cyber" className="bg-card">Cyber Investigation / Forensics</option>
                      <option value="private" className="bg-card">Private / Matrimonial Investigation</option>
                      <option value="asset" className="bg-card">Asset Tracing</option>
                      <option value="other" className="bg-card">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Confidential Message</label>
                    <textarea name="message" rows={4} maxLength={5000} className="w-full bg-background/50 border border-border rounded px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Provide brief details. Do not include highly sensitive personal data in this initial form."></textarea>
                  </div>

                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  {error && <p role="alert" className="text-sm text-destructive">{error}</p>}

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button disabled={isSubmitting} type="submit" className="flex-1 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded hover:bg-primary/90 transition-colors disabled:cursor-not-allowed disabled:opacity-70">
                      {isSubmitting ? "Sending…" : "Request Consultation"}
                    </button>
                    <button type="button" className="flex-1 bg-transparent border border-border text-foreground font-semibold px-6 py-3 rounded hover:bg-white/5 transition-colors">
                      Schedule Discussion
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
