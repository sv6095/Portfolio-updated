"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    id: 1,
    role: "AI Intern",
    company: "Himitsu Lab",
    type: "Internship",
    period: "Jan 2026 - May 2026",
    location: "Remote",
    description:
      "Developed AI-driven enterprise automation workflows using React, FastAPI, and LLM-powered orchestration pipelines.",
    highlights: [
      "Automated 70%+ of repetitive operational tasks across multi-stage processes",
      "Engineered frontend and async backend for 6+ intelligent automation agents",
      "Optimized distributed Docker pipelines, reducing recurring production issues by 50%+",
    ],
    tags: ["REACT", "FASTAPI", "LLM", "DOCKER"],
    current: true,
  },
  {
    id: 2,
    role: "AI/ML & App Dev Intern",
    company: "MedicFood",
    type: "Internship",
    period: "May 2025 - Nov 2025",
    location: "Remote",
    description:
      "Designed and deployed scalable REST APIs using Flask for real-time prescription validation and built transformer-based NLP extraction systems.",
    highlights: [
      "Improved extraction accuracy by 88%+ and reduced manual verification effort by 60%+",
      "Developed smart reminder system with caregiver integration and Firebase Cloud Messaging",
      "Supported 1000+ alerts, missed-dose tracking, and refill monitoring workflows",
    ],
    tags: ["FLASK", "NLP", "FIREBASE", "REST API"],
    current: false,
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center relative z-10"
      >
        <span className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase bg-[#adc6ff]/10 px-3 py-1.5 rounded-full inline-block mb-4">
          Career Journey
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] tracking-tight flex items-center justify-center gap-3">
          <Briefcase className="text-[var(--primary-text)]" size={36} />
          Experience
        </h2>
      </motion.div>

      <div ref={containerRef} className="relative max-w-5xl mx-auto px-6 md:px-12">
        {/* The Track (Background Line) */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2 rounded-full" />

        {/* The Progress (Animated Glowing Line) */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-6 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-cyan-300 via-emerald-400 to-teal-500 md:-translate-x-1/2 origin-top rounded-full shadow-[0_0_20px_rgba(45,212,191,0.8)] z-0"
        />

        <div className="space-y-16 md:space-y-24 relative z-10">
          {experiences.map((exp, i) => {
            const isEven = i % 2 === 0;

            return (
              <div key={exp.id} className="relative flex flex-col md:flex-row justify-between items-center w-full">
                
                {/* Desktop Left Side (Date or Card) */}
                <div className={`hidden md:flex w-5/12 ${isEven ? 'justify-end pr-14' : 'justify-start pl-14 order-last'}`}>
                  {isEven ? (
                    // Date on the left
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="text-right"
                    >
                      <div className="flex items-center justify-end gap-2 text-[var(--primary-text)] font-mono mb-1">
                        <Calendar size={14} />
                        <span className="text-lg font-bold">{exp.period}</span>
                      </div>
                      <div className="text-sm text-[var(--muted)] font-mono">{exp.location}</div>
                    </motion.div>
                  ) : (
                    // Card on the left
                    <motion.div
                      initial={{ opacity: 0, x: -50, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-full text-left"
                    >
                      <ExperienceCard exp={exp} align="left" />
                    </motion.div>
                  )}
                </div>

                {/* Center Node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                  className={`absolute left-6 md:left-1/2 w-5 h-5 rounded-full border-4 border-[var(--background)] md:-translate-x-1/2 -translate-x-[9.5px] z-20 ${
                    exp.current ? "bg-[#adc6ff] shadow-[0_0_15px_rgba(173,198,255,0.8)]" : "bg-[var(--muted)]"
                  }`}
                />

                {/* Mobile & Desktop Right Side */}
                <div className={`w-full pl-16 md:pl-0 md:w-5/12 flex ${!isEven ? 'md:justify-end md:pr-14' : 'md:justify-start md:pl-14'}`}>
                  {/* Mobile Date Wrapper (Always visible on mobile, hidden on desktop) */}
                  <div className="md:hidden mb-4 absolute top-0 left-16 -mt-1 text-left">
                    <div className="text-[var(--primary-text)] font-mono text-sm font-bold flex items-center gap-1.5">
                      <Calendar size={12} /> {exp.period}
                    </div>
                  </div>

                  {/* Desktop Right Side Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -30, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full mt-6 md:mt-0"
                  >
                    {!isEven ? (
                      // Date on the right
                      <div className="hidden md:block text-left">
                        <div className="flex items-center justify-start gap-2 text-[var(--primary-text)] font-mono mb-1">
                          <Calendar size={14} />
                          <span className="text-lg font-bold">{exp.period}</span>
                        </div>
                        <div className="text-sm text-[var(--muted)] font-mono">{exp.location}</div>
                      </div>
                    ) : (
                      // Card on the right
                      <ExperienceCard exp={exp} align="right" />
                    )}
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Sub-component for the card to keep the main map clean
function ExperienceCard({ exp, align }: { exp: any, align: 'left' | 'right' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      className="bento-card p-8 group transition-all duration-300 relative overflow-hidden"
    >
      {/* Subtle hover gradient inside card */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-[var(--foreground)] mb-1 tracking-tight">{exp.role}</h3>
        <p className="text-[var(--primary-text)] font-semibold text-base mb-6 inline-flex items-center gap-2">
          {exp.company}
          <span className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider bg-white/10 text-[var(--foreground)]/70 font-mono">
            {exp.type}
          </span>
        </p>

        <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">{exp.description}</p>

        <ul className="space-y-3 mb-6">
          {exp.highlights.map((h: string) => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-[var(--muted)] leading-relaxed">
              <span className="text-[var(--primary-text)] mt-0.5 shrink-0 text-xs">▹</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--glass-border)]">
          {exp.tags.map((tag: string) => (
            <span
              key={tag}
              className="tech-tag px-2.5 py-1 rounded-md text-[11px] font-mono text-[var(--muted)] tracking-wider bg-[var(--background)]/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
