"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Award, Lightbulb, Cloud, Zap, Code2, Presentation } from "lucide-react";

const hackathons = [
  {
    name: "AI4Bharat AWS Hackathon",
    project: "Content Room",
    result: "1st Nationally",
    badge: "WINNER",
    badgeColor: "text-orange-400 bg-orange-400/10 border-orange-400/25",
    accentGlow: "group-hover:shadow-orange-500/15",
    cardHover: "from-orange-500/0 to-orange-500/8",
    projectColor: "text-orange-400",
    detail: "1st place nationally — 96,000+ developers, 3,000+ teams",
    year: "2026",
    logoUrl: "/aws.svg",
  },
  {
    name: "Google Solution Challenge",
    project: "Precantator",
    result: "Semi-Finalist",
    badge: "TOP 106",
    badgeColor: "text-[#8ab4f8] bg-[#4285f4]/10 border-[#4285f4]/25",
    accentGlow: "group-hover:shadow-blue-500/15",
    cardHover: "from-[#4285f4]/0 to-[#4285f4]/8",
    projectColor: "text-[#8ab4f8]",
    detail: "Top 106 teams globally, built with AI",
    year: "2026",
    logoUrl: "/google.svg",
  },
  {
    name: "Hackstorm'26",
    project: "Gubernator",
    result: "Runner-up",
    badge: "2ND PLACE",
    badgeColor: "text-violet-300 bg-violet-400/10 border-violet-400/25",
    accentGlow: "group-hover:shadow-violet-500/15",
    cardHover: "from-violet-500/0 to-violet-500/8",
    projectColor: "text-violet-300",
    detail: "Best Project Runner-up at SRM",
    year: "2026",
    logoUrl: "",
  },
];

const expos = [
  {
    name: "Java Project Expo",
    project: "InnerEcho",
    result: "1st Place",
    badge: "WINNER",
    badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/25",
    accentGlow: "group-hover:shadow-amber-500/10",
    detail: "Mental wellness app — Flutter & Spring Boot",
    year: "2024",
  },
  {
    name: "NWC Expo",
    project: "Pet Platter",
    result: "Runner-up",
    badge: "2ND PLACE",
    badgeColor: "text-[#d0bcff] bg-[#d0bcff]/10 border-[#d0bcff]/25",
    accentGlow: "group-hover:shadow-purple-500/10",
    detail: "IoT smart pet feeder with automated care analytics",
    year: "2024",
  },
  {
    name: "SRM Project Expo",
    project: "Milo",
    result: "3rd Prize",
    badge: "3RD PRIZE",
    badgeColor: "text-[#c9c6c5] bg-[#c9c6c5]/10 border-[#c9c6c5]/25",
    accentGlow: "group-hover:shadow-stone-500/10",
    detail: "Campus project showcase recognition",
    year: "Oct 2025",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase">
          Recognition &amp; Impact
        </span>
        <h2 className="text-4xl font-bold text-[var(--foreground)] mt-2 tracking-tight flex items-center gap-3">
          <Trophy className="text-[var(--primary-text)]" size={32} />
          Achievements &amp; Leadership
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bento-card md:col-span-6 p-8 relative overflow-hidden group"
        >
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-blue-500/8 rounded-full blur-3xl group-hover:bg-blue-500/15 transition-all duration-500" />
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-[#adc6ff]/10 border border-[#adc6ff]/20 flex items-center justify-center">
              <Users size={18} className="text-[var(--primary-text)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--foreground)]">Clubs & Leadership</h3>
          </div>

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-base font-semibold text-[var(--foreground)]">Technical Head</h4>
            </div>
            <p className="text-[var(--primary-text)] font-mono text-xs tracking-wider mb-5">
              ACM SIGAPP SRM · Jun 2025 – May 2026
            </p>
            <ul className="space-y-3">
              {[
                "Lead a 35+ member technical team",
                "Organized AI Escape Room (100+ participants)",
                "Mentored 4+ live projects",
                "Recognized as the Best Technical Team on campus",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                  <span className="text-[var(--primary-text)] shrink-0 mt-0.5">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bento-card md:col-span-6 p-8 relative overflow-hidden group"
        >
          <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-purple-500/8 rounded-full blur-3xl group-hover:bg-purple-500/15 transition-all duration-500" />
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-[#d0bcff]/10 border border-[#d0bcff]/20 flex items-center justify-center">
              <Award size={18} className="text-[#d0bcff]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--foreground)]">Certifications</h3>
          </div>

          <div className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-[var(--glass-border)] p-5 rounded-xl"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/15 border border-orange-500/20 flex items-center justify-center shrink-0">
                  <Cloud size={18} className="text-orange-400" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[var(--foreground)] leading-tight">
                    Oracle Cloud Infrastructure
                  </h4>
                  <p className="text-[#d0bcff] text-sm mt-0.5">Generative AI Professional</p>
                  <p className="text-[var(--muted)] font-mono text-xs mt-2 tracking-wider">ORACLE · 2024</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Hackathons — electric blue / violet theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bento-card md:col-span-12 p-8 md:p-10 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.06] via-blue-500/[0.04] to-cyan-500/[0.05] pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
          <div className="absolute -right-24 -top-24 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/15 transition-all duration-700" />
          <div className="absolute -left-24 -bottom-24 w-48 h-48 bg-cyan-500/8 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-violet-500/15 border border-violet-400/30 flex items-center justify-center">
                <Zap size={20} className="text-violet-300" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--foreground)] tracking-tight">Hackathons</h3>
                <p className="text-sm text-[var(--muted)] mt-0.5">National &amp; global competitive wins</p>
              </div>
            </div>
            <span className="self-start sm:self-auto font-mono text-xs text-violet-300 tracking-widest uppercase px-3 py-1.5 rounded-full border border-violet-400/25 bg-violet-500/10">
              3 Wins
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {hackathons.map((h, i) => (
              <motion.article
                key={h.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
                className={`relative group flex flex-col h-full rounded-xl bg-white/[0.03] overflow-hidden transition-all duration-300 hover:shadow-lg ${h.accentGlow}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${h.cardHover} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-5">
                    {h.logoUrl ? (
                      <div className="w-9 h-9 rounded-lg bg-white p-1.5 shadow-sm flex items-center justify-center shrink-0">
                        <img src={h.logoUrl} alt={`${h.name} logo`} className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-400/20 flex items-center justify-center shrink-0">
                        <Code2 size={16} className="text-violet-300" />
                      </div>
                    )}
                    <span
                      className={`text-[10px] font-mono border px-2.5 py-1 rounded-full tracking-wider shrink-0 ${h.badgeColor}`}
                    >
                      {h.badge}
                    </span>
                  </div>

                  <p className="text-2xl font-bold text-[var(--foreground)] tracking-tight leading-none mb-1.5">
                    {h.result}
                  </p>
                  <p className={`text-xs font-mono tracking-wider uppercase mb-3 ${h.projectColor}`}>
                    {h.project}
                  </p>
                  <h4 className="text-sm font-semibold text-[var(--foreground)] leading-snug mb-2">{h.name}</h4>
                  <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">{h.detail}</p>
                  <p className="text-[var(--muted)] font-mono text-xs tracking-wider mt-4 pt-3 border-t border-[var(--glass-border)]">
                    {h.year}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Expos — full-width showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bento-card md:col-span-12 p-8 md:p-10 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.05] via-transparent to-orange-500/[0.04] pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
          <div className="absolute -right-24 -top-24 w-64 h-64 bg-amber-500/8 rounded-full blur-3xl group-hover:bg-amber-500/12 transition-all duration-700" />
          <div className="absolute -left-24 -bottom-24 w-48 h-48 bg-orange-500/6 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
                <Presentation size={20} className="text-amber-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--foreground)] tracking-tight">Expos</h3>
                <p className="text-sm text-[var(--muted)] mt-0.5">Campus &amp; regional project showcases</p>
              </div>
            </div>
            <span className="self-start sm:self-auto font-mono text-xs text-amber-400 tracking-widest uppercase px-3 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/5">
              3 Awards
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {expos.map((expo, i) => (
              <motion.article
                key={expo.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
                className={`relative group flex flex-col h-full rounded-xl bg-white/[0.03] overflow-hidden transition-all duration-300 hover:shadow-lg ${expo.accentGlow}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                      <Lightbulb size={16} className="text-amber-400" />
                    </div>
                    <span
                      className={`text-[10px] font-mono border px-2.5 py-1 rounded-full tracking-wider shrink-0 ${expo.badgeColor}`}
                    >
                      {expo.badge}
                    </span>
                  </div>

                  <p className="text-2xl font-bold text-[var(--foreground)] tracking-tight leading-none mb-1.5">
                    {expo.result}
                  </p>
                  <p className="text-xs font-mono text-amber-400 tracking-wider uppercase mb-3">{expo.project}</p>
                  <h4 className="text-sm font-semibold text-[var(--foreground)] leading-snug mb-2">{expo.name}</h4>
                  <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">{expo.detail}</p>
                  <p className="text-[var(--muted)] font-mono text-xs tracking-wider mt-4 pt-3 border-t border-[var(--glass-border)]">
                    {expo.year}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
