import { useState } from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    type: "",
  });

  const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
  event.preventDefault();

  if (!scriptUrl) {
    setStatus({
      loading: false,
      type: "error",
      message: "Google Sheet connection is not configured yet.",
    });
    return;
  }

  setStatus({
    loading: true,
    type: "",
    message: "",
  });

  try {
    const formBody = new URLSearchParams();

    formBody.append("name", formData.name);
    formBody.append("email", formData.email);
    formBody.append("phone", formData.phone);
    formBody.append("subject", formData.subject);
    formBody.append("message", formData.message);

    await fetch(scriptUrl, {
      method: "POST",
      mode: "no-cors",
      body: formBody,
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setStatus({
      loading: false,
      type: "success",
      message: "Thank you. Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    setStatus({
      loading: false,
      type: "error",
      message: "Something went wrong. Please try again.",
    });
  }
}

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
              <span>Regd Off: 17, SR Compound, 452010
                <br />
                Corp Off: 102, Pushpanjali Appt. 1st Main 1st Cross, Near Canara Bank, Chamrajpet, Bangalore - 560018
              </span>
            </div>
            <div>
              <Phone />
              <span>+91 7049591014, +91 9827275120</span>
            </div>
            <div>
              <Mail />
              <span>atrolabs77@gmail.com</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn btn-primary" disabled={status.loading}>
            {status.loading ? "Submitting..." : "Send Enquiry"}
            {!status.loading && <ArrowRight size={18} />}
          </button>

          {status.message && (
            <p className={`form-status ${status.type}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;