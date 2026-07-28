import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <article className="property-card">
      <div className="property-image-wrapper">
        <img
          className="property-image"
          src={property.image}
          alt={`${property.title} in ${property.city}, ${property.state}`}
        />

        <span className="property-type">{property.type}</span>
      </div>

      <div className="property-content">
        <p className="property-location">
          <MapPin size={17} aria-hidden="true" />
          {property.city}, {property.state}
        </p>

        <h3>{property.title}</h3>

        <p className="property-price">{formattedPrice}</p>

        <div className="property-details">
          <span>
            <BedDouble size={18} aria-hidden="true" />
            {property.beds} beds
          </span>

          <span>
            <Bath size={18} aria-hidden="true" />
            {property.baths} baths
          </span>

          <span>
            <Ruler size={18} aria-hidden="true" />
            {property.sqft.toLocaleString()} sq. ft.
          </span>
        </div>

        <Link
          className="button property-card-button"
          to={`/properties/${property.id}`}
          aria-label={`View details for ${property.title}`}
        >
          View Property
        </Link>
      </div>
    </article>
  );
}

export default PropertyCard;