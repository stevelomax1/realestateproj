import { useState } from "react";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  CalendarDays,
  Check,
  MapPin,
  Ruler,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import properties from "../data/properties";

function PropertyDetails() {
  const { propertyId } = useParams();

  const property = properties.find(
    (currentProperty) => currentProperty.id === Number(propertyId)
  );

  if (!property) {
    return (
      <section className="property-not-found container">
        <p className="eyebrow">Listing unavailable</p>
        <h1>Property not found</h1>
        <p>
          This property may have been removed or the listing address may be
          incorrect.
        </p>

        <Link className="button" to="/properties">
          Return to Properties
        </Link>
      </section>
    );
  }

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <>
      <section className="property-details-page">
        <div className="container">
          <Link className="back-link" to="/properties">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to properties
          </Link>

          <div className="property-details-header">
            <div>
              <p className="property-details-location">
                <MapPin size={18} aria-hidden="true" />
                {property.city}, {property.state}
              </p>

              <h1>{property.title}</h1>
            </div>

            <p className="property-details-price">{formattedPrice}</p>
          </div>

          <img
            className="property-details-main-image"
            src={property.image}
            alt={`${property.title} located in ${property.city}, ${property.state}`}
          />

          <div className="property-details-layout">
            <div className="property-main-content">
              <div className="property-summary">
                <div>
                  <BedDouble size={24} aria-hidden="true" />
                  <strong>{property.beds}</strong>
                  <span>Bedrooms</span>
                </div>

                <div>
                  <Bath size={24} aria-hidden="true" />
                  <strong>{property.baths}</strong>
                  <span>Bathrooms</span>
                </div>

                <div>
                  <Ruler size={24} aria-hidden="true" />
                  <strong>{property.sqft.toLocaleString()}</strong>
                  <span>Square feet</span>
                </div>

                <div>
                  <span className="property-type-icon" aria-hidden="true">
                    H
                  </span>
                  <strong>{property.type}</strong>
                  <span>Property type</span>
                </div>
              </div>

              <section className="property-content-section">
                <p className="eyebrow">Property overview</p>
                <h2>About this home</h2>
                <p>{property.description}</p>
              </section>

              <section className="property-content-section">
                <p className="eyebrow">Home features</p>
                <h2>Amenities</h2>

                <ul className="amenities-grid">
                  {property.amenities.map((amenity) => (
                    <li key={amenity}>
                      <Check size={18} aria-hidden="true" />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="showing-card">
              <div className="showing-card-heading">
                <CalendarDays size={28} aria-hidden="true" />

                <div>
                  <h2>Schedule a showing</h2>
                  <p>Choose a time to tour this property.</p>
                </div>
              </div>

              <ShowingForm propertyTitle={property.title} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function ShowingForm({ propertyTitle }) {
  const [successMessage, setSuccessMessage] = useState("");
  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const showingRequest = {
      property: propertyTitle,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      date: formData.get("date"),
      message: formData.get("message"),
    };

    console.log("Showing request:", showingRequest);

    setSuccessMessage(
      `Thank you, ${showingRequest.name}. Your request to view ${propertyTitle} has been received.`
    );

    form.reset();
  }

  return (
    <form className="showing-form" onSubmit={handleSubmit}>
      {successMessage && (
        <div className="form-success-message" role="status">
          <Check size={20} aria-hidden="true" />
          <p>{successMessage}</p>
        </div>
      )}

      <div className="form-field">
        <label htmlFor="showing-name">Full name</label>

        <input
          id="showing-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="showing-email">Email address</label>

        <input
          id="showing-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="showing-phone">Phone number</label>

        <input
          id="showing-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(555) 555-5555"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="showing-date">Preferred date</label>

        <input
          id="showing-date"
          name="date"
          type="date"
          min={today}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="showing-message">Message</label>

        <textarea
          id="showing-message"
          name="message"
          rows="4"
          placeholder="Tell us about your availability."
        />
      </div>

      <button className="button showing-submit-button" type="submit">
        Request a Showing
      </button>

      <p className="form-disclaimer">
        This is a portfolio demonstration form. No information is submitted to
        a live real-estate agency.
      </p>
    </form>
  );
}

export default PropertyDetails;
