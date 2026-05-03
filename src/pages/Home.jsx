import HeroTopSection from "../components/HeroTopSection";
import CompanyOverview from "../components/CompanyOverview";
import ProductsSection from "../components/ProductsSection";
import WhyChoose from "../components/WhyChoose";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <>
      <HeroTopSection />
      <CompanyOverview />
      <ProductsSection />
      <WhyChoose />
      <ContactSection />
    </>
  );
}

export default Home;