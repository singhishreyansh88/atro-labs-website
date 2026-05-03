import HeroSection from "./HeroSection";
import CategoryStrip from "./CategoryStrip";

import heroBackground from "../assets/hero-background.jpg";
import heroBackgroundMobile from "../assets/hero-background-mobile.jpg";

function HeroTopSection() {
  return (
    <section
      className="hero-top-section"
      style={{
        "--hero-bg": `url(${heroBackground})`,
        "--hero-bg-mobile": `url(${heroBackgroundMobile})`,
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