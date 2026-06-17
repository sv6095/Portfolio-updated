"use client";

import { motion } from "framer-motion";
import { Brain, Server, Laptop, Cloud } from "lucide-react";

const categories = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Developing intelligent algorithms, models, and data processing pipelines.",
    icon: Brain,
    glowColor: "group-hover:bg-emerald-500/5",
    borderColor: "group-hover:border-emerald-500/30",
    iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    subcategories: [
      {
        name: "Libraries & Frameworks",
        tags: ["PyTorch", "scikit-learn", "TensorFlow", "LangChain", "Hugging Face"],
      },
      {
        name: "Data Stack",
        tags: ["NumPy", "Pandas", "Matplotlib"],
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & Databases",
    description: "Designing scalable services, relational structures, and robust logic.",
    icon: Server,
    glowColor: "group-hover:bg-blue-500/5",
    borderColor: "group-hover:border-blue-500/30",
    iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    subcategories: [
      {
        name: "Languages",
        tags: ["Python", "C++", "Java"],
      },
      {
        name: "Web Frameworks",
        tags: ["Flask", "FastAPI", "Spring Boot"],
      },
      {
        name: "Databases",
        tags: ["MySQL", "PostgreSQL", "Redis"],
      },
      {
        name: "Software Architecture",
        tags: ["REST APIs", "Microservices", "OOP"],
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Creating responsive, interactive web pages and mobile user interfaces.",
    icon: Laptop,
    glowColor: "group-hover:bg-purple-500/5",
    borderColor: "group-hover:border-purple-500/30",
    iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    subcategories: [
      {
        name: "Core Web Stack",
        tags: ["HTML", "CSS", "JavaScript", "TypeScript"],
      },
      {
        name: "Frameworks & UI Tools",
        tags: ["React", "Next.js", "Flutter"],
      },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Managing automated pipelines, container ecosystems, and cloud services.",
    icon: Cloud,
    glowColor: "group-hover:bg-cyan-500/5",
    borderColor: "group-hover:border-cyan-500/30",
    iconColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    subcategories: [
      {
        name: "Cloud (AWS)",
        tags: ["EC2", "S3", "Lambda", "API Gateway", "DynamoDB", "CloudWatch"],
      },
      {
        name: "DevOps & Containers",
        tags: ["Docker", "Kubernetes", "Git"],
      },
      {
        name: "Methodology & Lifecycle",
        tags: ["CI/CD", "Agile", "SDLC", "End-to-End Development"],
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

export default function TechArsenal() {
  return (
    <section id="arsenal" className="py-32 border-y border-[var(--glass-border)] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center relative z-10"
      >
        <span className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase bg-[#adc6ff]/10 px-3 py-1.5 rounded-full inline-block mb-4">
          Tech Stack
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] tracking-tight flex items-center justify-center gap-3">
          <Brain className="text-[var(--primary-text)]" size={36} />
          Technical Arsenal
        </h2>
      </motion.div>

      {/* Grid of Categories */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 relative z-10"
      >
        {categories.map((cat) => {
          const IconComponent = cat.icon;
          return (
            <motion.div
              key={cat.id}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`bento-card p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-lg hover:shadow-black/5 transition-all duration-300 ${cat.borderColor}`}
            >
              {/* Glow effect on hover */}
              <div className={`absolute -right-12 -top-12 w-48 h-48 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${cat.glowColor}`} />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl border ${cat.iconColor} transition-transform duration-300 group-hover:scale-110 shrink-0`}>
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--foreground)] tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Subcategories and Tech Tags */}
                <div className="space-y-6">
                  {cat.subcategories.map((sub, idx) => (
                    <div key={idx} className="space-y-2.5">
                      <h4 className="font-mono text-[10px] tracking-wider text-[var(--muted)] uppercase font-semibold">
                        {sub.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {sub.tags.map((tag) => (
                          <span
                            key={tag}
                            className="tech-tag px-3 py-1.5 rounded-lg text-xs font-mono text-[var(--muted)] bg-[var(--background)]/40 hover:text-[var(--foreground)] transition-all duration-300 border border-[var(--tag-border)] hover:border-[var(--tag-hover-border)] hover:bg-[var(--tag-hover-bg)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
