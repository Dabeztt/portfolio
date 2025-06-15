import ThemeToggle from "../Components/ThemeToggle";
import StarBackground from "../Components/StarBackground";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutMeSection from "../Components/AboutMeSection";
import SkillsSection from "../Components/SkillsSection";
import ProjectsSection from "../Components/ProjectsSection";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
