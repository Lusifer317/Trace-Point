import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { name: "Cyber Fraud Help", href: "/#cyber-fraud-help", highlight: true },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/#about" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    // Handle anchor links from non-home pages
    if (href.startsWith("/#")) {
      if (location !== "/") {
        window.location.href = href;
      } else {
        const id = href.replace("/#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-serif font-bold tracking-wider text-foreground">
          Trace<span className="text-primary">Point</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (location === "/") {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className={`text-sm font-medium transition-colors ${
                  link.highlight
                    ? "text-primary hover:text-primary/80 font-semibold"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-foreground"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            )
          )}

          <div className="flex items-center gap-4 border-l border-border pl-6">
            <button
              onClick={toggleTheme}
              className="text-foreground/60 hover:text-foreground transition-colors p-2"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="/#contact"
              className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-foreground/60 hover:text-foreground transition-colors p-2"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border p-6 shadow-xl flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium py-3 border-b border-border/50 transition-colors ${
                link.highlight ? "text-primary" : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-3 w-full text-center px-5 py-3 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
