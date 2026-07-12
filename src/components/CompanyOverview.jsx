import { motion } from "framer-motion";
import { Building2, BadgeCheck, ShieldCheck } from "lucide-react";

function CompanyOverview() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          className="overview-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="section-label">Our Mission</p>
            <h2>Dependable healthcare accessible without compromise.</h2>
            <p style={{ marginBottom: "16px" }}>
              We combine deep industry understanding with a disciplined approach to product selection, ensuring that everything we offer reflects safety, consistency, and effectiveness.
            </p>
            <p>
              For us, the true measure of success is not market presence, but the confidence we earn through every product we deliver.
            </p>
          </div>

          <div className="overview-features">
            <div>
              <Building2 />
              <span>40+ Years Pharmaceutical Legacy</span>
            </div>
            <div>
              <BadgeCheck />
              <span>Disciplined Product Selection</span>
            </div>
            <div>
              <ShieldCheck />
              <span>Compliant Partner Manufacturing</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CompanyOverview;