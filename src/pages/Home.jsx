import HeroSection from "../components/HeroSection";
import CategoryStrip from "../components/CategoryStrip";
import CompanyOverview from "../components/CompanyOverview";
import ProductsSection from "../components/ProductsSection";
import WhyChoose from "../components/WhyChoose";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <>
      <HeroSection />
      <CategoryStrip />
      <CompanyOverview />
      <ProductsSection />
      <WhyChoose />
      <ContactSection />
    </>
  );
}

export default Home;