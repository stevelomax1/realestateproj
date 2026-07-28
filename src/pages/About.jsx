import { Award, Handshake, HeartHandshake, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    id: 1,
    title: "Local Knowledge",
    description:
      "We understand the communities, neighborhoods, and property market throughout Southwest Virginia.",
    icon: MapPin,
  },
  {
    id: 2,
    title: "Honest Communication",
    description:
      "Clients receive clear information, realistic expectations, and timely updates throughout the process.",
    icon: Handshake,
  },
  {
    id: 3,
    title: "Personal Service",
    description:
      "Every buyer and seller receives guidance based on their unique goals, priorities, and timeline.",
    icon: HeartHandshake,
  },
  {
    id: 4,
    title: "Professional Standards",
    description:
      "We approach each property and client relationship with preparation, consistency, and attention to detail.",
    icon: Award,
  },
];

function About() {
  return (
    <>
      <section className="page-hero about-page-hero">
        <div className="container">
          <p className="eyebrow">About The Realty Group</p>
          <h1>Local guidance. Personal service. Better results.</h1>
          <p>
            We help clients navigate real-estate decisions with clarity,
            confidence, and personalized support.
          </p>
        </div>
      </section>

      <section className="about-story-section">
        <div className="container about-story-grid">
          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200"
              alt="Real-estate professional meeting with clients"
            />

            <div className="about-experience-card">
              <strong>25+</strong>
              <span>Years of combined experience</span>
            </div>
          </div>

          <div className="about-story-content">
            <p className="eyebrow">Our story</p>
            <h2>Helping people move forward</h2>

            <p>
              The Realty Group is a fictional Southwest Virginia real-estate
              company created as a front-end development portfolio project.
            </p>

            <p>
              The website demonstrates how a modern real-estate agency can
              present listings, services, company information, and contact
              options through a responsive and accessible user experience.
            </p>

            <p>
              Our fictional team believes that buying or selling a home should
              feel organized and understandable. That is why communication,
              preparation, and personal service guide every client interaction.
            </p>

            <Link className="button" to="/properties">
              Explore Properties
            </Link>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Our values</p>
            <h2>What guides our work</h2>
            <p>
              We focus on trust, local knowledge, and consistent service.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="value-card" key={value.id}>
                  <div className="value-icon">
                    <Icon size={25} aria-hidden="true" />
                  </div>

                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-statistics-section">
        <div className="container about-statistics-grid">
          <div>
            <strong>500+</strong>
            <span>Properties sold</span>
          </div>

          <div>
            <strong>150+</strong>
            <span>Clients served</span>
          </div>

          <div>
            <strong>25+</strong>
            <span>Years of experience</span>
          </div>

          <div>
            <strong>4.9</strong>
            <span>Average client rating</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;