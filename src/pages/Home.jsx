import { Link } from "react-router-dom";
import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import SectionHeading from "../components/SectionHeading";
import properties from "../data/properties";

function Home() {
    const [search, setSearch] = useState("");

const featuredProperties = properties.filter(
  (property) => property.featured
);

const filteredProperties = featuredProperties.filter((property) =>
  property.title.toLowerCase().includes(search.toLowerCase()) ||
  property.city.toLowerCase().includes(search.toLowerCase())
);
  return (
    <>
      <section className="hero">

        <div className="container hero-grid">

          <div>

            <p className="eyebrow">
              Welcome to The Realty Group
            </p>

            <h1>
              Find Your Dream Home
            </h1>

            <p className="hero-text">
              Whether you're buying your first home or upgrading to your forever
              home, our experienced agents help you every step of the way.
            </p>

            <div className="hero-buttons">
              <Link className="button" to="/properties">
                Browse Properties
              </Link>

              <Link className="button secondary" to="/contact">
                Contact an Agent
              </Link>
            </div>

          </div>

          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200"
            alt="Luxury Home"
          />

        </div>

      </section>

      <section className="featured">

        <div className="container">

          <SectionHeading
            title="Featured Properties"
            subtitle="Take a look at some of our most popular homes."
          />

          <input
            className="search-box"
            type="text"
            placeholder="Search by city or property..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="property-grid">

            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                />
              ))
            ) : (
              <div className="empty-state">
                <h2>No properties found.</h2>
                <p>Try searching another city.</p>
              </div>
            )}

          </div>

        </div>

      </section>

      <section className="stats">

        <div className="container stats-grid">

          <div>
            <h2>500+</h2>
            <p>Homes Sold</p>
          </div>

          <div>
            <h2>150+</h2>
            <p>Happy Families</p>
          </div>

          <div>
            <h2>25 Years</h2>
            <p>Experience</p>
          </div>

          <div>
            <h2>4.9★</h2>
            <p>Client Rating</p>
          </div>

        </div>

      </section>
    </>
  );
}

export default Home;
