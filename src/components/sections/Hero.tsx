"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />

      {/* Ambient glows */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div 
          animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -40, 30, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[100px]" 
        />
      </motion.div>

      <div className="max-w-[1280px] mx-auto px-8 pt-32 pb-20 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Text column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-7 space-y-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 tech-tag px-4 py-2 rounded-full font-mono text-xs tracking-widest text-[var(--muted)]">
                <span className="w-2 h-2 rounded-full bg-[#adc6ff] pulse-ring inline-block" />
                <MapPin size={12} className="text-[var(--primary-text)]" />
                Chennai, India
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-sans font-extrabold tracking-tighter text-[var(--foreground)] leading-none"
              style={{ fontSize: "clamp(48px, 8vw, 84px)" }}
            >
              Shantanu V.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-[var(--muted)] max-w-xl leading-relaxed font-light"
            >
              Cloud, AI &amp; Full-Stack Engineer.{" "}
              <span className="text-[var(--foreground)]">
                Fusing scalable cloud architectures,
              </span>{" "}
              state-of-the-art AI models, and robust full-stack ecosystems to engineer meaningful, high-impact solutions.
            </motion.p>


            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="btn-primary px-8 py-3 rounded-xl font-mono text-xs font-bold tracking-wider"
              >
                Explore My Work <ArrowDown size={16} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-3 rounded-xl font-mono text-xs font-medium tracking-wider"
              >
                Download Resume <Download size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* Avatar column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="md:col-span-5 flex justify-center md:justify-end"
          >
            <div className="relative group">
              {/* Outer glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-dashed border-[#adc6ff]/15"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border border-dashed border-[#571bc1]/10"
              />

              {/* Glow blob */}
              <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-transparent rounded-full blur-2xl group-hover:from-blue-500/25 transition-all duration-700" />

              {/* Avatar image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-[var(--glass-border)] shadow-2xl avatar-glow"
              >
                <Image
                  src="/avatar-cartoon.png"
                  alt="Shantanu V. — AI/ML Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -left-6 glass-panel rounded-xl px-4 py-2 border border-[var(--glass-border)]"
              >
                <div className="text-xs font-mono text-[var(--muted)] tracking-wider">CURRENTLY</div>
                <div className="text-sm font-semibold text-[var(--foreground)] mt-0.5">Available for Roles</div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400">Open to work</span>
                </div>
              </motion.div>


            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs tracking-widest text-[var(--muted)]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-[var(--muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
