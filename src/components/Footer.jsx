import logo from "../assets/atro-labs-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <img src={logo} alt="ATRO Labs Logo" className="footer-logo" />

        <p>© 2026 ATRO Labs. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;