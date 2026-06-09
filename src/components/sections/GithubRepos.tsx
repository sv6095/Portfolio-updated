"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/motion";
import { Github } from "lucide-react";

const GITHUB_USERNAME = 'sv6095';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

const languageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  "C++": "#f34b7d",
  Jupyter: "#DA5B0B",
  "Jupyter Notebook": "#DA5B0B"
};

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  updated_at: string;
  language: string;
  fork: boolean;
  archived: boolean;
}

export default function GithubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(GITHUB_API_URL, {
          headers: { Accept: "application/vnd.github.v3+json" },
        });
        if (!response.ok) throw new Error("Failed to fetch");
        const data: Repo[] = await response.json();
        
        // Exact repos requested by user
        const selectedRepos = [
          "Household-Services-application",
          "Ocr-autofill-Forms",
          "Quiz-Master",
          "StreamGuard",
          "Trading-bot",
          "Unlabel"
        ];
        
        let filtered = data
          .filter((r) => !r.fork && !r.archived && selectedRepos.includes(r.name))
          .sort(
            (a, b) =>
              selectedRepos.indexOf(a.name) - selectedRepos.indexOf(b.name)
          );

        // Fallback to latest repos if exact ones aren't found
        if (filtered.length === 0) {
           filtered = data.filter(r => !r.fork && !r.archived).sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).slice(0, 6);
        }
          
        setRepos(filtered);
      } catch (err) {
        console.error("Error fetching GitHub repos:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section className="py-24 max-w-[1280px] mx-auto px-6" id="github-repos">
      <SectionHeader eyebrow="Open Source" title="GitHub Live Repositories" icon={Github} />
      
      <div className="flex flex-col gap-4 mt-8 max-w-4xl mx-auto">
        {loading ? (
          <p className="text-[var(--muted)] font-mono text-center animate-pulse py-12">Loading repositories from API...</p>
        ) : error ? (
          <div className="text-center py-12 font-mono text-[var(--muted)]">
            Unable to load repositories. Please visit my{" "}
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="text-[var(--primary-text)] underline">
              GitHub profile
            </a>{" "}
            directly.
          </div>
        ) : repos.length === 0 ? (
          <p className="text-center py-12 font-mono text-[var(--muted)]">No active repositories found for {GITHUB_USERNAME}.</p>
        ) : (
          repos.map((repo, i) => {
            const isExpanded = expandedId === repo.id;
            const num = (i + 1).toString().padStart(2, "0");
            const langColor = repo.language ? languageColors[repo.language] || "#858585" : "#858585";
            const date = new Date(repo.updated_at).toLocaleDateString("en-US", { year: "numeric", month: "short" });

            return (
              <div 
                key={repo.id}
                onClick={() => setExpandedId(isExpanded ? null : repo.id)}
                className="cursor-pointer border border-[var(--glass-border)] bg-[var(--card-bg)] rounded-xl overflow-hidden transition-all duration-300 hover:border-[var(--primary-text)] shadow-sm hover:shadow-md group"
              >
                {/* Header Row */}
                <div className="flex items-center justify-between p-5 bg-[var(--tag-bg)] border-b border-transparent group-hover:bg-transparent transition-colors">
                  <div className="flex items-center gap-4 font-mono text-sm">
                    <span className="text-[var(--muted)] opacity-50">{num}</span>
                    <div className="text-[var(--muted)]">
                      src/repos/<span className="text-[var(--foreground)] font-bold">{repo.name.toLowerCase()}</span>
                    </div>
                  </div>
                  <span 
                    className="text-[var(--primary-text)] font-mono text-xl transition-transform duration-300" 
                    style={{ transform: isExpanded ? 'rotate(45deg)' : 'rotate(0)' }}
                  >
                    +
                  </span>
                </div>

                {/* Expanded Content Drawer */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="border-t border-[var(--glass-border)] bg-[var(--background)] overflow-hidden"
                    >
                      <div className="p-6 sm:p-8 flex gap-6">
                        {/* Editor Line Numbers */}
                        <div className="hidden sm:block text-right font-mono text-xs text-[var(--muted)] select-none opacity-40 leading-relaxed pt-1 border-r border-[var(--glass-border)] pr-4">
                          1<br/>2<br/>3<br/>4
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{repo.name}</h3>
                          <p className="text-[var(--foreground)] opacity-80 text-sm mb-6 leading-relaxed max-w-2xl">
                            {repo.description || "No description available for this repository."}
                          </p>
                          
                          <div className="flex flex-wrap gap-5 items-center font-mono text-xs text-[var(--muted)] border-t border-[var(--glass-border)] pt-4 mt-2">
                            {repo.language && (
                              <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: langColor }} />
                                {repo.language}
                              </div>
                            )}
                            <span className="opacity-70">Updated: {date}</span>
                            <a 
                              href={repo.html_url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-[var(--primary-text)] hover:underline ml-auto flex items-center gap-1.5 font-bold transition-all hover:opacity-80"
                            >
                              View on GitHub <span className="text-lg leading-none">↗</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
