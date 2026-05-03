import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-grid hero-grid-background">
        <motion.div
          className="hero-content hero-content-on-bg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">ATRO Labs</p>

          <h1>Trusted Healthcare & Dermatology Products</h1>

          <p className="hero-text">
            ATRO Labs offers quality medicines and dermatological products for
            everyday health, wellness, and care.
          </p>

          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">
              Explore Products <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Us <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        <div className="hero-visual-space" aria-hidden="true"></div>
      </div>
    </section>
  );
}

export default HeroSection;