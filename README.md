# 🌌 Shantanu V. — Cloud, AI & Full-Stack Engineer Portfolio

Welcome to the source repository for my professional portfolio. This is a highly polished, responsive, and interactive web application built with **Next.js 14**, **React 18**, and **Framer Motion**, featuring rich animations, glassmorphism aesthetics, dynamic lighting effects, and direct integrations with the GitHub API.

Live API-driven components show real-time GitHub repository states, while responsive timelines, bento grids, and interactive marquees showcase my work, education, and professional achievements.

---

## ✨ Key Features

- **🌌 Ambient Dynamic Hero Section**: Fluid animated background glows, float-on-hover custom avatar, dynamic scroll indicators, and a live status badge.
- **🛠️ Infinite Marquee Tech Arsenal**: Dual-row, alternating-direction, infinite-scrolling marquee presenting languages and technologies (Python, PyTorch, LangChain, AWS, Next.js, etc.).
- **⏳ Interactive Experience Timeline**: A custom SVG-tracked path with scroll-driven gradient progression that lights up milestones as you scroll.
- **🍱 Selected Projects Bento Grid**: Modern grid displaying 15+ curated engineering works with unique hover tilts, border-glow animations, and tag filters.
- **🎓 Dual-Education Showcase**: Highlight card for concurrent dual-degree tracks (B.Tech at SRM Institute + B.Sc at IIT Madras).
- **🏆 Achievements & Leadership Bento**: Dedicated modules for national hackathon wins (e.g., *1st Nationally* at AI4Bharat AWS Hackathon, *Top 106* Google Solution Challenge Semi-Finalist), club leadership (ACM SIGAPP SRM Technical Head), and professional certifications (Oracle GenAI).
- **📂 Git-Diff GitHub Repos Integration**: A customized code-editor style accordion drawer that fetches real-time repository stats and descriptions directly from the GitHub API.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server-side rendering optimization)
- **UI & Logic**: [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Scroll-linked paths, stagger animations, presence transitions)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS (custom variables, keyframe marquees, glassmorphism utility classes)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme Support**: `next-themes` (Dark/Light capabilities)
- **3D Foundation**: Three.js integration configured (`three`, `@react-three/fiber`, `@react-three/drei`)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.x or later) and **npm** installed.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/sv6095/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the development server locally:
```bash
npm run dev
```


### Production Build

To build the optimized production package:
```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```text
portfolio/
├── public/                 # Static assets (logos, resume PDF, avatar)
├── scripts/                # Custom build/deployment pipelines
├── src/
│   ├── app/                # Next.js App Router (pages, layout, globals)
│   │   ├── globals.css     # Global custom CSS, scrollbars & variables
│   │   ├── layout.tsx      # Core viewport, SEO tags, Providers
│   │   └── page.tsx        # Main application layout entrypoint
│   ├── components/
│   │   ├── nav/
│   │   │   └── Navbar.tsx  # Dynamic glassmorphic navbar with section links
│   │   ├── sections/       # Section-specific components
│   │   │   ├── Achievements.tsx  # Hackathons, Certifications, Clubs
│   │   │   ├── Education.tsx     # Academic history
│   │   │   ├── Experience.tsx    # Scroll-linked history timeline
│   │   │   ├── Footer.tsx        # Legal & social links
│   │   │   ├── GithubRepos.tsx   # Live API-driven GitHub code drawers
│   │   │   ├── Hero.tsx          # Hero page with ambient canvas glow
│   │   │   ├── Projects.tsx      # Project bento grid
│   │   │   └── TechArsenal.tsx   # Infinite scroll marquees
│   │   └── ui/
│   │       ├── Providers.tsx     # Theme/motion contexts wrapper
│   │       └── ThemeSwitcher.tsx # Theme toggling logic
│   └── lib/                # Utility helpers and configurations
├── tailwind.config.js      # Custom theme definitions & fonts
└── tsconfig.json           # TypeScript configuration
```

---

## 🎨 Theme & Styling System

The application utilizes dynamic CSS custom properties defined in [`src/app/globals.css`] and referenced throughout the project. Custom variables control:
- Glassmorphic panels (`--glass-bg`, `--glass-border`)
- Ambient blur filters and border effects
- Typography families (`Outfit` for headings, `Fira Code` for code blocks)
- Smooth page transitions and custom scrolling mechanics
