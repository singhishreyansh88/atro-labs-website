import { motion } from "framer-motion";
import { ShieldCheck, Award, Eye, HeartHandshake, Building2, History } from "lucide-react";

function About() {
  const stats = [
    { label: "Industry Legacy", value: "40+ Years", icon: History },
    { label: "Partner Facilities", value: "Fully Compliant", icon: Building2 },
    { label: "Core Commitment", value: "Quality First", icon: ShieldCheck },
  ];

  return (
    <section className="page-section product-listing-page" style={{ paddingTop: "40px", overflow: "hidden" }}>
      <div className="container">
        
        {/* Hero Section */}
        <div className="product-listing-header" style={{ marginBottom: "40px", textAlign: "center", flexDirection: "column", alignItems: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label" style={{ justifyContent: "center" }}>Discover Our Story</p>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", marginBottom: "20px" }}>A Legacy Built on Trust</h1>
            <p style={{ fontSize: "19px", maxWidth: "800px", lineHeight: "1.7", margin: "0 auto", color: "var(--grey)" }}>
              ATRO Labs is built on a foundation of over four decades of experience in the pharmaceutical industry. Our journey began with a deep involvement in the wholesale market, where consistency, reliability, and strong relationships became the core values of our organization.
            </p>
          </motion.div>
        </div>

        {/* Fixed Stats Banner */}
        <div className="why-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "60px" }}>
          {stats.map((stat, idx) => {
  const Icon = stat.icon;
  return (
    <motion.div 
      key={idx}
      className="why-card" 
      style={{ 
        textAlign: "center", 
        padding: "30px 20px", 
        background: "linear-gradient(135deg, #ffffff 0%, #faf7ff 100%) !important",
        backgroundColor: "#faf7ff"
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: idx * 0.1 }}
      whileHover={{ y: -5, boxShadow: "var(--shadow)" }}
    >
      {/* Outer circular background with relative positioning */}
      <div style={{ 
        width: "50px", 
        height: "50px", 
        background: "rgba(75, 36, 156, 0.06)", 
        borderRadius: "50%", 
        margin: "0 auto 16px", 
        color: "var(--purple)",
        position: "relative"
      }}>
        {/* Inner container using absolute transformations to lock dead center */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          lineHeight: "0",
          display: "block",
          padding: "0",
          margin: "0"
        }}>
          <Icon size={24} style={{ display: "block", margin: "0", padding: "0" }} />
        </div>
      </div>
      <h3 style={{ fontSize: "28px", color: "var(--purple)", margin: "0 0 4px 0" }}>{stat.value}</h3>
      <p style={{ margin: 0, fontSize: "14px", color: "var(--grey)", fontWeight: 600 }}>{stat.label}</p>
    </motion.div>
  );
})}
        </div>

        {/* Mission & Vision Row */}
        <div className="product-list-grid" style={{ gap: "30px", marginBottom: "60px" }}>
          <motion.div 
            className="listed-product-card" 
            style={{ gridTemplateColumns: "1fr", padding: "40px", position: "relative", background: "#ffffff", borderLeft: "4px solid var(--purple)" }}
            whileHover={{ x: 4 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px", color: "var(--purple)" }}>
              <Award size={28} />
              <h2 style={{ margin: 0, fontSize: "24px", fontWeight: 800 }}>Our Mission</h2>
            </div>
            <p style={{ margin: 0, color: "var(--grey)", lineHeight: "1.7", fontSize: "16px" }}>
              At ATRO Labs, our mission is to make dependable healthcare accessible without compromise. We combine deep industry understanding with a disciplined approach to product selection, ensuring that everything we offer reflects safety, consistency, and effectiveness.
            </p>
          </motion.div>

          <motion.div 
            className="listed-product-card" 
            style={{ gridTemplateColumns: "1fr", padding: "40px", position: "relative", background: "#ffffff", borderLeft: "4px solid var(--orange)" }}
            whileHover={{ x: 4 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px", color: "var(--orange)" }}>
              <Eye size={28} />
              <h2 style={{ margin: 0, fontSize: "24px", fontWeight: 800 }}>Our Vision</h2>
            </div>
            <p style={{ margin: 0, color: "var(--grey)", lineHeight: "1.7", fontSize: "16px" }}>
              To build ATRO Labs into a trusted name in healthcare, recognized for quality, reliability, and consistency. We aspire to be a brand that healthcare professionals and patients choose with confidence by consistently delivering products that meet high standards of quality and performance.
            </p>
          </motion.div>
        </div>

        {/* Corporate Evolution Narrative */}
        <div className="overview-card" style={{ marginBottom: "60px", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
          <div>
            <p className="section-label">Evolving with Purpose</p>
            <h3 style={{ fontSize: "28px", margin: "0 0 16px 0", letterSpacing: "-0.02em", fontWeight: 800 }}>Thoughtful, Deliberate Curation</h3>
            <p style={{ fontSize: "16px", color: "var(--grey)", lineHeight: "1.75", margin: 0 }}>
              ATRO Labs was established with a clear intent to bring thoughtfully developed pharmaceutical products to the market under a name that reflects our values and experience. Every product introduced under ATRO Labs is curated to focus explicitly on quality, consistency, and clinical effectiveness.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", paddingLeft: "30px", borderLeft: "2px solid var(--border)" }}>
            <p style={{ fontSize: "16px", color: "var(--purple)", lineHeight: "1.8", margin: 0, fontWeight: "600", fontStyle: "italic" }}>
              "While ATRO Labs is a focused brand, it is built on years of deep industry knowledge and guided by a strong sense of responsibility. Our ambition is not simply to participate in the market, but to make a meaningful and lasting contribution to it through quality, reliability, and trust."
            </p>
          </div>
        </div>

        {/* Split Technical Quality Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          <div style={{ padding: "34px", background: "#ffffff", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", color: "var(--purple)" }}>
              <div style={{ padding: "8px", background: "rgba(75, 36, 156, 0.06)", borderRadius: "10px", display: "inline-flex" }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ margin: 0, fontSize: "22px", fontWeight: 800 }}>Consistent Quality</h3>
            </div>
            <p style={{ color: "var(--grey)", lineHeight: "1.7", fontSize: "15px", margin: 0 }}>
              Quality is a baseline standard we have worked with for decades. We maintain a stringent focus on product integrity, right from baseline development to final distribution channels. Each product is crafted with precision, built to established regulatory standards, and designed to deliver dependable performance.
            </p>
          </div>

          <div style={{ padding: "34px", background: "#ffffff", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", color: "var(--purple)" }}>
              <div style={{ padding: "8px", background: "rgba(75, 36, 156, 0.06)", borderRadius: "10px", display: "inline-flex" }}>
                <HeartHandshake size={24} />
              </div>
              <h3 style={{ margin: 0, fontSize: "22px", fontWeight: 800 }}>Manufacturing Partners</h3>
            </div>
            <p style={{ color: "var(--grey)", lineHeight: "1.7", fontSize: "15px", margin: 0 }}>
              Transparency is an important part of how we operate. ATRO Labs collaborates exclusively with established and fully compliant pharmaceutical manufacturing facilities that adhere strictly to quality and regulatory standards. These strategic partnerships enable us to lock in absolute batches consistency.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;