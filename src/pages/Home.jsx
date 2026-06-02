import React from "react";
import CleanBackground from "../components/ui/CleanBackground";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import SkillsSection from "../components/home/SkillsSection";
import ProjectsSection from "../components/home/ProjectsSection";

function Home() {
  return (
    <main id="top" className="relative bg-background text-text">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-full overflow-hidden">
        <CleanBackground />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </main>
  );
}

export default Home;
