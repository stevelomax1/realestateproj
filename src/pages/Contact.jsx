import { Check, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));

    setSuccessMessage("");
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.interest) {
      newErrors.interest = "Please select how we can help.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide at least 10 characters.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
      return;
    }

    console.log("Contact form submitted:", formData);

    setSuccessMessage(
      `Thank you, ${formData.name}. Your message has been received.`
    );

    setFormData(initialFormData);
    setErrors({});
  }

  return (
    <>
      <section className="page-hero contact-page-hero">
        <div className="container">
          <p className="eyebrow">Contact us</p>
          <h1>Let’s discuss your real-estate goals.</h1>
          <p>
            Send our team a message and we will help you plan your next step.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-layout">
          <div className="contact-information">
            <p className="eyebrow">Get in touch</p>
            <h2>We’re ready to help</h2>

            <p className="contact-introduction">
              Contact The Realty Group to ask about available homes, selling a
              property, relocation support, or scheduling a consultation.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Phone size={22} aria-hidden="true" />
                </div>

                <div>
                  <h3>Phone</h3>
                  <a href="tel:+15415550142">(541) 555-0142</a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Mail size={22} aria-hidden="true" />
                </div>

                <div>
                  <h3>Email</h3>
                  <a href="mailto:hello@therealtygroup.example">
                    hello@therealtygroup.example
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <MapPin size={22} aria-hidden="true" />
                </div>

                <div>
                  <h3>Office</h3>
                  <p>Roanoke, Virginia</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Clock3 size={22} aria-hidden="true" />
                </div>

                <div>
                  <h3>Business hours</h3>
                  <p>Monday–Friday, 9:00 AM–5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <p className="eyebrow">Send a message</p>
              <h2>How can we help?</h2>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {successMessage && (
                <div className="form-success-message" role="status">
                  <Check size={20} aria-hidden="true" />
                  <p>{successMessage}</p>
                </div>
              )}

              <div className="form-field">
                <label htmlFor="contact-name">Full name</label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />

                {errors.name && (
                  <p className="form-error" id="name-error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">Email address</label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />

                {errors.email && (
                  <p className="form-error" id="email-error">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="contact-phone">Phone number</label>

                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-interest">How can we help?</label>

                <select
                  id="contact-interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.interest)}
                  aria-describedby={
                    errors.interest ? "interest-error" : undefined
                  }
                >
                  <option value="">Select an option</option>
                  <option value="buying">Buying a home</option>
                  <option value="selling">Selling a home</option>
                  <option value="showing">Scheduling a showing</option>
                  <option value="relocation">Relocation assistance</option>
                  <option value="general">General question</option>
                </select>

                {errors.interest && (
                  <p className="form-error" id="interest-error">
                    {errors.interest}
                  </p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Message</label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />

                {errors.message && (
                  <p className="form-error" id="message-error">
                    {errors.message}
                  </p>
                )}
              </div>

              <button className="button contact-submit-button" type="submit">
                Send Message
              </button>

              <p className="form-disclaimer">
                This demonstration form does not send information to a real
                business.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;