import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProjectSection } from "../components/ProjectSection";
import { SkillSection } from "../components/SkillSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeTogle } from "../components/ThemeTogle";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Theme Togle */}
      {/* <ThemeTogle /> */}
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
