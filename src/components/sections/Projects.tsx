"use client";

import { motion } from "framer-motion";
import { ExternalLink, Brain, Navigation, Mail, Scale, Smile } from "lucide-react";

const projects = [
  {
    id: "content-room",
    title: "Content Room",
    description:
      "AI-powered multi-modal content generation platform using AWS services. Ranked 1st nationally out of 96,000+ developers across 3,000+ teams at the AI4Bharat AWS Hackathon.",
    tags: ["AWS", "AI", "MULTI-MODAL"],
    accent: "from-amber-500/10 via-transparent",
    glow: "bg-amber-500/15",
    href: "https://github.com/sv6095",
  },
  {
    id: "precantator",
    title: "Precantator",
    description:
      "Innovative AI solution built for the Google Solution Challenge. Recognized as a Top 106 teams Semi-Finalist globally.",
    tags: ["AI", "GOOGLE CLOUD", "INNOVATION"],
    accent: "from-blue-500/10 via-transparent",
    glow: "bg-blue-500/15",
    href: "https://github.com/sv6095/Solution-Challenge-20261",
  },
  {
    id: "pet-platter",
    title: "Pet Platter",
    description:
      "IoT-based smart pet feeder integrating hardware sensors and analytics for automated pet care. Runner-up at the NWC Expo.",
    tags: ["IOT", "SENSORS", "ANALYTICS"],
    accent: "from-emerald-500/10 via-transparent",
    glow: "bg-emerald-500/15",
    href: "https://github.com/sv6095",
  },
  {
    id: "milo",
    title: "Milo",
    description:
      "Advanced route optimization system leveraging AWS cloud infrastructure for efficient and scalable pathfinding.",
    tags: ["AWS", "ROUTING", "CLOUD"],
    accent: "from-purple-500/10 via-transparent",
    glow: "bg-purple-500/15",
    href: "https://github.com/sv6095/Milo",
  },
  {
    id: "innerecho",
    title: "InnerEcho",
    description:
      "Cross-platform mental wellness app featuring mood tracking, journaling, and emotional trend analysis using Flutter and Spring Boot.",
    tags: ["FLUTTER", "SPRING BOOT", "MOBILE"],
    accent: "from-pink-500/10 via-transparent",
    glow: "bg-pink-500/15",
    href: "https://github.com/sv6095/InnerEcho",
  },
  {
    id: "crime-tracer",
    title: "Crime Tracer",
    description:
      "Advanced legal classification system utilizing fine-tuned transformer architectures to analyze and categorize complex legal documents with unprecedented precision. Trained on a corpus of 100k+ Indian legal cases.",
    tags: ["NLP", "TRANSFORMERS", "PYTHON", "FASTAPI"],
    accent: "from-indigo-500/10 via-transparent",
    glow: "bg-indigo-500/15",
    href: "https://github.com/sv6095/Crime-Tracer",
  },
  {
    id: "gubernator",
    title: "Gubernator",
    description:
      "Real-time maritime intelligence and autonomous routing engine using Dijkstra's and A* algorithms for optimized oceanic navigation. Runner-up at Hackstorm'26.",
    tags: ["ALGORITHMS", "C++", "A*", "DIJKSTRA"],
    accent: "from-cyan-500/10 via-transparent",
    glow: "bg-cyan-500/15",
    href: "https://github.com/sv6095",
  },
  {
    id: "lexintellect",
    title: "LexIntellect",
    description: "Semantic search engine for historical legal precedents with vector embeddings.",
    tags: ["RAG", "EMBEDDINGS", "PYTHON"],
    accent: "from-teal-500/10 via-transparent",
    glow: "bg-teal-500/15",
    href: "https://github.com/sv6095/LexIntellect",
  },
  {
    id: "ai-email",
    title: "AI Email Assistant",
    description: "Context-aware inbox management using LLMs with smart categorization and auto-drafting.",
    tags: ["LLM", "LANGCHAIN", "PYTHON"],
    accent: "from-orange-500/10 via-transparent",
    glow: "bg-orange-500/15",
    href: "https://github.com/sv6095/Ai-Email-Assistant",
  },
  {
    id: "emonity",
    title: "Emonity",
    description: "Sentiment analysis framework for micro-expression detection in real-time video streams.",
    tags: ["CV", "NLP", "PYTHON"],
    accent: "from-rose-500/10 via-transparent",
    glow: "bg-rose-500/15",
    href: "https://github.com/sv6095/Emonity",
  },
  {
    id: "household-services",
    title: "Household Services",
    description: "A web-based platform connecting homeowners with service professionals, enabling seamless booking, tracking, and management of household services.",
    tags: ["HTML", "WEB", "PLATFORM"],
    accent: "from-sky-500/10 via-transparent",
    glow: "bg-sky-500/15",
    href: "https://github.com/sv6095/Household-Services-application",
  },
  {
    id: "ocr-autofill",
    title: "OCR Autofill Forms",
    description: "Automated document processing pipeline that leverages Optical Character Recognition (OCR) to intelligently extract and autofill form data.",
    tags: ["PYTHON", "OCR", "AUTOMATION"],
    accent: "from-fuchsia-500/10 via-transparent",
    glow: "bg-fuchsia-500/15",
    href: "https://github.com/sv6095/Ocr-autofill-Forms",
  },
  {
    id: "quiz-master",
    title: "Quiz Master",
    description: "Modern educational platform built with Flask that streamlines quiz creation and assessment with intuitive dashboards and timed tests.",
    tags: ["FLASK", "PYTHON", "WEB"],
    accent: "from-yellow-500/10 via-transparent",
    glow: "bg-yellow-500/15",
    href: "https://github.com/sv6095/Quiz-Master",
  },
  {
    id: "streamguard",
    title: "StreamGuard",
    description: "Real-time content monitoring and protection framework developed in Python.",
    tags: ["PYTHON", "STREAMING", "SECURITY"],
    accent: "from-red-500/10 via-transparent",
    glow: "bg-red-500/15",
    href: "https://github.com/sv6095/StreamGuard",
  },
  {
    id: "trading-bot",
    title: "Algorithmic Trading Bot",
    description: "A sophisticated algorithmic trading bot built with Python for automated market analysis and dynamic order execution.",
    tags: ["PYTHON", "ALGO TRADING", "FINANCE"],
    accent: "from-green-500/10 via-transparent",
    glow: "bg-green-500/15",
    href: "https://github.com/sv6095/Trading-bot",
  },
  {
    id: "unlabel",
    title: "Unlabel",
    description: "Modern web application leveraging TypeScript for robust and scalable frontend architecture.",
    tags: ["TYPESCRIPT", "WEB", "FRONTEND"],
    accent: "from-slate-500/10 via-transparent",
    glow: "bg-slate-500/15",
    href: "https://github.com/sv6095/Unlabel",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase">
          Selected Work
        </span>
        <h2 className="text-4xl font-bold text-[var(--foreground)] mt-2 tracking-tight flex items-center gap-3">
          <Brain className="text-[var(--primary-text)]" size={32} />
          Engineered Systems
        </h2>
      </motion.div>

      {/* Uniform grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bento-card p-8 flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden"
            onClick={() => window.open(project.href, "_blank")}
          >
            {/* Background glow */}
            <div
              className={`absolute -right-16 -top-16 w-56 h-56 ${project.glow} rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            />

            <div className="relative z-10 flex-1 flex flex-col pointer-events-none">
              {/* Header */}
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] tracking-tight">{project.title}</h3>
                  <div className={`h-0.5 w-8 mt-2 rounded-full bg-gradient-to-r ${project.accent}`} />
                </div>
                <div
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors border border-[var(--glass-border)] shrink-0 pointer-events-auto"
                >
                  <ExternalLink size={14} className="text-[var(--primary-text)]" />
                </div>
              </div>

              <p className="text-[var(--muted)] text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex gap-2 flex-wrap mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tech-tag px-2.5 py-1 rounded-md text-[11px] font-mono text-[var(--muted)] tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
