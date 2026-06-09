import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Shantanu V. | AI/ML Engineer & Full-Stack Developer",
  description:
    "AI/ML Engineer & Full-Stack Developer based in Chennai, India. Specializing in intelligent systems, autonomous agents, and transformer-based architectures.",
  keywords: [
    "AI Engineer", "ML Engineer", "Full-Stack Developer",
    "Python", "PyTorch", "LangChain", "React", "Next.js", "Chennai", "India",
  ],
  authors: [{ name: "Shantanu V." }],
  openGraph: {
    title: "Shantanu V. | AI/ML Engineer",
    description:
      "Architecting intelligent systems and autonomous agents for complex computational challenges.",
    type: "website",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body
        className="noise-overlay antialiased bg-[var(--background)] text-[var(--foreground)]"
        style={{
          fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)",
        }}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
