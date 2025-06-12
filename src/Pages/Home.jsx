import ThemeToggle from "../Components/ThemeToggle";
import StarBackground from "../Components/StarBackground";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutMeSection from "../Components/AboutMeSection";
import SkillsSection from "../Components/SkillsSection";

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
      </main>
    </div>
  );
};

export default Home;
