"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science",
    institution: "SRM Institute of Science and Technology",
    period: "Aug 2023 – May 2027",
    gpa: "8.65 / 10",
    courses: ["OOP", "OS", "JAVA", "DBMS", "COA", "DSA", "DAA", "NETWORKS", "COMPILER DESIGN"],
    color: "from-blue-500/10",
    accent: "#adc6ff",
  },
  {
    id: 2,
    degree: "B.Sc in Data Science",
    institution: "IIT Madras (Online)",
    period: "Sep 2023 – Apr 2027",
    gpa: null,
    courses: ["MATHEMATICS", "ML FOUNDATIONS", "ML TECHNIQUES", "TOOLS IN DS", "STATISTICS", "PROGRAMMING IN PYTHON"],
    color: "from-purple-500/10",
    accent: "#d0bcff",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase">
          Academic Background
        </span>
        <h2 className="text-4xl font-bold text-[var(--foreground)] mt-2 tracking-tight flex items-center gap-3">
          <GraduationCap className="text-[var(--primary-text)]" size={32} />
          Dual-Education Journey
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -4 }}
            className="bento-card p-8 group transition-all duration-300 relative"
          >
            {/* Gradient accent */}
            <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r ${edu.color} to-transparent`} />
            <div
              className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl`}
              style={{ background: `linear-gradient(90deg, ${edu.accent}30, transparent)` }}
            />

            {/* Institution badge */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-[var(--foreground)] tracking-tight">{edu.degree}</h3>
                <p
                  className="font-semibold text-sm mt-1"
                  style={{ color: edu.accent }}
                >
                  {edu.institution}
                </p>
              </div>
              <GraduationCap
                size={24}
                className="shrink-0 mt-1"
                style={{ color: edu.accent, opacity: 0.5 }}
              />
            </div>

            {/* Period + GPA */}
            <div className="flex flex-wrap justify-between items-center mb-6 font-mono text-xs text-[var(--muted)] tracking-wider gap-2">
              <span className="tech-tag px-3 py-1 rounded-full">{edu.period}</span>
              {edu.gpa && (
                <span className="font-bold" style={{ color: edu.accent }}>
                  GPA: {edu.gpa}
                </span>
              )}
            </div>

            <p className="font-mono text-xs text-[var(--muted)] tracking-widest mb-3 uppercase">Coursework</p>
            <div className="flex flex-wrap gap-2">
              {edu.courses.map((course) => (
                <span
                  key={course}
                  className="tech-tag px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wider"
                  style={{ color: edu.accent + "cc" }}
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dual degree highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 bento-card p-6 flex items-center gap-4"
      >
        <div className="shrink-0 w-10 h-10 rounded-full bg-[#adc6ff]/10 border border-[#adc6ff]/20 flex items-center justify-center">
          <GraduationCap size={18} className="text-[var(--primary-text)]" />
        </div>
        <div>
          <p className="text-[var(--foreground)] font-semibold text-sm">Pursuing two concurrent degrees simultaneously</p>
          <p className="text-[var(--muted)] text-xs font-mono mt-0.5">
            SRM Institute + IIT Madras · 2023–2027
          </p>
        </div>
        <div className="ml-auto shrink-0">
          <span className="font-mono text-xs bg-[#adc6ff]/10 border border-[#adc6ff]/20 text-[var(--primary-text)] px-3 py-1 rounded-full tracking-wider">
            DUAL DEGREE
          </span>
        </div>
      </motion.div>
    </section>
  );
}
