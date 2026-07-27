import { useParams } from "react-router-dom";
import properties from "../data/properties";

function PropertyDetails() {

  const { propertyId } = useParams();

  const property = properties.find(
    (home) => home.id === Number(propertyId)
  );

  if (!property) {
    return <h1>Property Not Found</h1>;
  }

  return (

    <section className="container">

      <img
        className="details-image"
        src={property.image}
        alt={property.title}
      />

      <h1>{property.title}</h1>

      <h2>{property.price}</h2>

      <p>{property.city}</p>

      <ul>

        <li>{property.beds} Bedrooms</li>

        <li>{property.baths} Bathrooms</li>

        <li>{property.sqft} Square Feet</li>

      </ul>

    </section>

  );
}

export default PropertyDetails;