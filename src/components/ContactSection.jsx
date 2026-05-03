import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <p className="section-label">Contact</p>
          <h2>Get in touch with us.</h2>
          <p>
            Reach out for product enquiries, distributor information, or
            business communication.
          </p>

          <div className="contact-details">
            <div>
              <MapPin />
              <span>ATRO Labs Pvt. Ltd., Your City, Country</span>
            </div>
            <div>
              <Phone />
              <span>+91 00000 00000</span>
            </div>
            <div>
              <Mail />
              <span>info@atrolabs.com</span>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="form-row">
            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
          </div>

          <textarea placeholder="Your Message"></textarea>

          <button type="submit" className="btn btn-primary">
            Send Enquiry <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;