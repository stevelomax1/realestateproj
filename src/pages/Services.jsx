import {
  BadgeDollarSign,
  Building2,
  Home,
  KeyRound,
  LineChart,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Home Buying",
    description:
      "We help buyers search available properties, compare options, prepare offers, and navigate the closing process.",
    icon: Search,
  },
  {
    id: 2,
    title: "Home Selling",
    description:
      "Our team helps sellers prepare, market, and position their property to attract qualified buyers.",
    icon: BadgeDollarSign,
  },
  {
    id: 3,
    title: "Property Marketing",
    description:
      "Professional property descriptions, online promotion, photography coordination, and targeted marketing strategies.",
    icon: LineChart,
  },
  {
    id: 4,
    title: "First-Time Buyers",
    description:
      "Clear guidance for buyers who need help understanding financing, showings, offers, inspections, and closing.",
    icon: KeyRound,
  },
  {
    id: 5,
    title: "Relocation Assistance",
    description:
      "Local insight and personalized property recommendations for individuals and families moving to Southwest Virginia.",
    icon: Home,
  },
  {
    id: 6,
    title: "Investment Properties",
    description:
      "We help clients explore residential investment opportunities based on location, price, and long-term potential.",
    icon: Building2,
  },
];

function Services() {
  return (
    <>
      <section className="page-hero services-page-hero">
        <div className="container">
          <p className="eyebrow">Our services</p>
          <h1>Real-estate guidance built around your goals.</h1>
          <p>
            Whether you are buying, selling, relocating, or investing, The
            Realty Group provides clear support throughout the process.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="services-introduction">
            <div>
              <p className="eyebrow">How we can help</p>
              <h2>A better real-estate experience</h2>
            </div>

            <p>
              Our approach combines market knowledge, responsive communication,
              and personalized guidance. Each client receives support based on
              their needs, timeline, and budget.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.id}>
                  <div className="service-icon">
                    <Icon size={26} aria-hidden="true" />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="service-process-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Our process</p>
            <h2>Simple, clear, and personalized</h2>
            <p>
              We keep clients informed at every stage so they can make
              confident decisions.
            </p>
          </div>

          <div className="process-grid">
            <article className="process-step">
              <span>01</span>
              <h3>Initial Consultation</h3>
              <p>
                We discuss your goals, preferred location, timeline, budget,
                and important property features.
              </p>
            </article>

            <article className="process-step">
              <span>02</span>
              <h3>Personalized Strategy</h3>
              <p>
                We create a clear plan for your property search, sale, or
                relocation.
              </p>
            </article>

            <article className="process-step">
              <span>03</span>
              <h3>Guidance and Support</h3>
              <p>
                We assist with property tours, offers, negotiations, and each
                major step toward closing.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container services-cta-content">
          <div>
            <p className="eyebrow">Let’s get started</p>
            <h2>Ready to make your next move?</h2>
            <p>
              Speak with The Realty Group about your buying or selling goals.
            </p>

            <Link className="button button-light" to="/contact">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
