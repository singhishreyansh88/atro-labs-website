import HeroSection from "./HeroSection";
import CategoryStrip from "./CategoryStrip";
import heroBackground from "../assets/hero-background.jpg";

function HeroTopSection() {
  return (
    <section
      className="hero-top-section"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      <div className="hero-background-overlay"></div>

      <div className="hero-top-content">
        <HeroSection />
        <CategoryStrip />
      </div>
    </section>
  );
}

export default HeroTopSection;