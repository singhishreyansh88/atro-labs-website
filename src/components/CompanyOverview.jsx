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
            <p className="section-label">Company Overview</p>
            <h2>Growing healthcare with quality and care.</h2>
            <p>
              ATRO Labs is a healthcare and dermatology brand focused on
              reliable products that support everyday wellness, treatment, and
              personal care needs.
            </p>
          </div>

          <div className="overview-features">
            <div>
              <Building2 />
              <span>Growing product portfolio</span>
            </div>
            <div>
              <BadgeCheck />
              <span>Quality-driven approach</span>
            </div>
            <div>
              <ShieldCheck />
              <span>Trusted healthcare brand</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CompanyOverview;