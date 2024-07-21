import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="sm:h-[calc(300vh+36vh)]  h-[calc(384vh+36vh)]">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
    </main>
  );
}
