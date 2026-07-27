import { useParams } from "react-router-dom";

function PropertyDetails() {
  const { propertyId } = useParams();

  return (
    <section className="page-placeholder container">
      <h1>Property Details</h1>
      <p>Viewing property: {propertyId}</p>
    </section>
  );
}

export default PropertyDetails;