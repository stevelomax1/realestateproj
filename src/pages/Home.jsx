import PropertyCard from "../components/PropertyCard";
import SectionHeading from "../components/SectionHeading";
import properties from "../data/properties";

function Home() {
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

              <button className="button">
                Browse Listings
              </button>

              <button className="button secondary">
                Contact Us
              </button>

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

          <div className="property-grid">

            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}

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