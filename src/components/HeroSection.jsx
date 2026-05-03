import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <motion.div
          className="hero-content"
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

        <motion.div
          className="hero-image-wrap"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="molecule-bg"></div>
          <div className="hero-image-placeholder">
            Product Images Placeholder
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;