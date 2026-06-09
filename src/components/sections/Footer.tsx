"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

const links = [
  { label: "GitHub",   Icon: Github,   href: "https://github.com/sv6095",      external: true  },
  { label: "LinkedIn", Icon: Linkedin,  href: "https://linkedin.com/in/shantanu-v-/", external: true  },
  { label: "Twitter",  Icon: Twitter,   href: "https://twitter.com/",     external: true  },
  { label: "Email",    Icon: Mail,      href: "mailto:shantanues234@gmail.com", external: false },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[var(--glass-border)] bg-[var(--background)] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-8 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xl font-extrabold tracking-tighter text-[var(--foreground)]">
              SHANTANU <span className="text-[var(--primary-text)]">V.</span>
            </div>
            <p className="font-mono text-xs tracking-widest mt-1 uppercase text-[var(--muted)]">
              AI/ML Engineer · Full-Stack Developer
            </p>
            <p className="font-mono text-xs tracking-wider mt-3 text-[var(--muted)]">
              © 2026 Shantanu V.
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 flex-wrap justify-center"
          >
            {links.map(({ label, Icon, href, external }) => (
              <motion.a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 tech-tag px-4 py-2 rounded-xl font-mono text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors group"
              >
                <Icon size={14} />
                <span className="hidden sm:block">{label}</span>
                {external && (
                  <ArrowUpRight size={10} className="text-[var(--muted)] group-hover:text-[var(--primary-text)] transition-colors" />
                )}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 pt-6 border-t border-[var(--glass-border)] flex flex-col sm:flex-row justify-between items-center gap-2"
        >
          <p className="font-mono text-xs tracking-wider text-[var(--muted)]">
            Built with Next.js 14 · Tailwind CSS 3 · Framer Motion 11
          </p>
          <a
            href="#"
            className="font-mono text-xs text-[var(--muted)] hover:text-[var(--primary-text)] transition-colors tracking-wider flex items-center gap-1"
          >
            Back to top <ArrowUpRight size={10} />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
