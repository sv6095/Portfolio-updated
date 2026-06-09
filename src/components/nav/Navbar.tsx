"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Arsenal", href: "#arsenal" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "glass-nav shadow-lg shadow-black/5 dark:shadow-black/30"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex justify-between items-center max-w-[1280px] mx-auto px-8 h-20">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2">
            <span className="font-bold text-xl tracking-tighter text-[var(--foreground)] font-sans">
              SHANTANU
              <span className="text-[var(--primary-text)]"> V.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                  activeSection === href.slice(1)
                    ? "text-[var(--primary-text)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Trigger */}
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <a
              href="#contact"
              className="hidden md:flex btn-primary px-5 py-2 rounded-lg font-mono text-xs tracking-widest font-bold"
            >
              CONNECT
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-72 z-50 md:hidden glass-panel border-l border-white/10 flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <span className="font-bold text-white tracking-tight">MENU</span>
                <button onClick={() => setMobileOpen(false)} className="text-[#c2c6d6]">
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-6 flex-1">
                {navLinks.map(({ label, href }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => setMobileOpen(false)}
                    className="font-mono text-sm tracking-widest uppercase text-[#c2c6d6] hover:text-white transition-colors"
                  >
                    {label}
                  </motion.a>
                ))}
              </div>
              <div className="p-6 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center py-3 px-6 rounded-lg font-mono text-xs tracking-widest font-bold"
                >
                  CONNECT
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
