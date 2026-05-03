import { motion } from "framer-motion";
import { Boxes, ShieldCheck, BadgeCheck, TrendingUp } from "lucide-react";

const reasons = [
  {
    title: "Wide Product Range",
    text: "A growing range across healthcare and dermatology.",
    icon: Boxes,
  },
  {
    title: "Quality Focus",
    text: "Products developed with quality at the core.",
    icon: ShieldCheck,
  },
  {
    title: "Trusted Brand",
    text: "Built on care, reliability, and customer confidence.",
    icon: BadgeCheck,
  },
  {
    title: "Growing Portfolio",
    text: "Continuously expanding to support better health.",
    icon: TrendingUp,
  },
];

function WhyChoose() {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Why Choose ATRO Labs</p>
          <h2>Built for quality, care, and trust.</h2>
        </div>

        <div className="why-grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                className="why-card"
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Icon size={34} />
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;