import React from "react";
import { Shield, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="text-2xl font-serif font-bold tracking-wider text-foreground">
              Trace<span className="text-primary">Point</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Elite corporate investigations and digital forensics. Where Fortune 500 legal teams turn for precise, discreet, and irreversible truth.
            </p>
            <div className="flex items-center gap-3 pt-2 text-muted-foreground">
              <Shield size={18} className="text-primary" />
              <span className="text-sm font-medium">Licensed & Certified</span>
            </div>
          </div>

          {/* Services Col */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-foreground tracking-wide uppercase text-sm">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Corporate Intelligence</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Due Diligence</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cyber Forensics</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Private Investigation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Asset Tracing</a></li>
            </ul>
          </div>

          {/* Industries Col */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-foreground tracking-wide uppercase text-sm">Industries</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Legal Firms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Financial Services</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Insurance</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Technology</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Healthcare</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-foreground tracking-wide uppercase text-sm">Contact Center</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Financial District, Nanakramguda<br />Hyderabad, Telangana 500032</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 40 XXXX XXXX (24/7)</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary shrink-0" />
                <span>contact@tracepointintel.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} TracePoint Intelligence. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/50 italic text-center md:text-left">
            "All investigations conducted with strict legal compliance under Indian law."
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Confidentiality Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
