import { motion } from "framer-motion";
import { ShieldCheck, Layers, Users, TrendingUp } from "lucide-react";

const pillars = [
  {
    title: "Quality First",
    text: "Quality is never compromised. Every decision is guided by rigorous standards ensuring safety and dependable performance.",
    icon: ShieldCheck,
  },
  {
    title: "Unwavering Consistency",
    text: "Every product is manufactured to deliver the exact same level of high quality, reliability, and clinical performance—every single time.",
    icon: Layers,
  },
  {
    title: "Long-Term Relationships",
    text: "Committed to earning the trust of healthcare professionals, distributors, and partners through total transparency and mutual respect.",
    icon: Users,
  },
  {
    title: "Continuous Growth",
    text: "Dedicated to continuous improvement, embracing deliberate innovations, and strengthening our capabilities over time.",
    icon: TrendingUp,
  },
];

function WhyChoose() {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Our Values</p>
          <h2>Built on decades of trust. Designed for today.</h2>
        </div>

        <div className="why-grid">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                className="why-card"
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Icon size={34} />
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;