import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <article className="property-card">

      <img
        src={property.image}
        alt={property.title}
      />

      <div className="property-content">

        <h3>{property.title}</h3>

        <p>{property.city}</p>

        <h2>{property.price}</h2>

        <div className="property-details">

          <span>{property.beds} Beds</span>

          <span>{property.baths} Baths</span>

          <span>{property.sqft} Sq Ft</span>

        </div>

        <Link
          className="button"
          to={`/properties/${property.id}`}
        >
          View Details
        </Link>

      </div>

    </article>
  );
}

export default PropertyCard;