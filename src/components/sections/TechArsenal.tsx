"use client";

import { motion } from "framer-motion";

const techStack = [
  { label: "PYTHON" },
  { label: "PYTORCH" },
  { label: "TENSORFLOW" },
  { label: "LANGCHAIN" },
  { label: "FASTAPI" },
  { label: "REACT" },
  { label: "AWS" },
  { label: "DOCKER" },
  { label: "NEXT.JS" },
  { label: "TYPESCRIPT" },
];

const techStack2 = [
  { label: "HUGGING FACE" },
  { label: "SCIKIT-LEARN" },
  { label: "POSTGRESQL" },
  { label: "REDIS" },
  { label: "KUBERNETES" },
  { label: "GIT" },
  { label: "C++" },
  { label: "JAVA" },
  { label: "FLUTTER" },
  { label: "SPRING BOOT" },
];

function MarqueeRow({
  items,
  reverse = false,
  speed = "30s",
}: {
  items: typeof techStack;
  reverse?: boolean;
  speed?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-container py-1">
      <div
        className={reverse ? "marquee-content-reverse" : "marquee-content"}
        style={{ animationDuration: speed }}
      >
        {doubled.map((tech, i) => (
          <span
            key={`${tech.label}-${i}`}
            className="tech-tag px-4 py-2 rounded-lg font-mono text-xs tracking-widest text-[var(--muted)] flex items-center shrink-0 cursor-default"
          >
            {tech.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechArsenal() {
  return (
    <section id="arsenal" className="py-24 border-y border-[var(--glass-border)] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-blue-500/5 blur-[80px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <span className="font-mono text-xs tracking-widest text-[var(--muted)] uppercase">
          Technical Arsenal
        </span>
        <h2 className="text-3xl font-bold text-[var(--foreground)] mt-2 tracking-tight">
          Tools &amp; Technologies
        </h2>
      </motion.div>

      <div className="space-y-3">
        <MarqueeRow items={techStack} speed="35s" />
        <MarqueeRow items={techStack2} reverse speed="28s" />
      </div>
    </section>
  );
}
