"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  icon: LucideIcon;
}

export function SectionHeader({ eyebrow, title, icon: Icon }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <span className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase">
        {eyebrow}
      </span>
      <h2 className="text-4xl font-bold text-[var(--foreground)] mt-2 tracking-tight flex items-center gap-3">
        <Icon className="text-[var(--primary-text)]" size={32} />
        {title}
      </h2>
    </motion.div>
  );
}
