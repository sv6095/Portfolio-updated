import dynamic from "next/dynamic";

// All sections use Framer Motion — load them client-side only to avoid SSR
const Navbar        = dynamic(() => import("@/components/nav/Navbar"),               { ssr: false });
const Hero          = dynamic(() => import("@/components/sections/Hero"),             { ssr: false });
const TechArsenal   = dynamic(() => import("@/components/sections/TechArsenal"),     { ssr: false });
const Experience    = dynamic(() => import("@/components/sections/Experience"),       { ssr: false });
const Projects      = dynamic(() => import("@/components/sections/Projects"),         { ssr: false });
const Education     = dynamic(() => import("@/components/sections/Education"),        { ssr: false });
const Achievements  = dynamic(() => import("@/components/sections/Achievements"),     { ssr: false });
const Footer        = dynamic(() => import("@/components/sections/Footer"),           { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1280px] mx-auto px-8">
        <Hero />
        <TechArsenal />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
      </main>
      <Footer />
    </>
  );
}
