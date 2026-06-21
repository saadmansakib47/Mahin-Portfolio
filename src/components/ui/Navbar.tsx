"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Achievements", href: "#achievements" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md border-b border-navy-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="text-white font-semibold text-sm tracking-wide"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          M<span className="text-teal-400">.</span>Mahmud
        </a>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-navy-300 hover:text-teal-400 text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:mahinmahmud64@gmail.com"
          className="hidden md:flex items-center gap-2 text-xs font-semibold text-teal-400 border border-teal-500/40 px-4 py-2 rounded-lg hover:bg-teal-500/10 transition-all duration-200"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
