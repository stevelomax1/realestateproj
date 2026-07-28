import { useMemo, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";

const initialFilters = {
  search: "",
  city: "all",
  bedrooms: "all",
  maxPrice: "all",
  propertyType: "all",
};

function Properties() {
  const [filters, setFilters] = useState(initialFilters);

  const cities = [...new Set(properties.map((property) => property.city))];
  const propertyTypes = [
    ...new Set(properties.map((property) => property.type)),
  ];

  const filteredProperties = useMemo(() => {
    const normalizedSearch = filters.search.trim().toLowerCase();

    return properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(normalizedSearch) ||
        property.city.toLowerCase().includes(normalizedSearch);

      const matchesCity =
        filters.city === "all" || property.city === filters.city;

      const matchesBedrooms =
        filters.bedrooms === "all" ||
        property.beds >= Number(filters.bedrooms);

      const matchesPrice =
        filters.maxPrice === "all" ||
        property.price <= Number(filters.maxPrice);

      const matchesType =
        filters.propertyType === "all" ||
        property.type === filters.propertyType;

      return (
        matchesSearch &&
        matchesCity &&
        matchesBedrooms &&
        matchesPrice &&
        matchesType
      );
    });
  }, [filters]);

  function handleFilterChange(event) {
    const { name, value } = event.target;

    setFilters((currentFilters) => ({
      ...currentFilters,
      [name]: value,
    }));
  }

  function clearFilters() {
    setFilters(initialFilters);
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Available homes</p>
          <h1>Find your next property.</h1>
          <p>
            Search available homes throughout Roanoke and the surrounding
            communities.
          </p>
        </div>
      </section>

      <section className="properties-section">
        <div className="container">
          <div className="filter-panel">
            <div className="filter-search">
              <label htmlFor="property-search">Search properties</label>

              <input
                id="property-search"
                name="search"
                type="search"
                placeholder="Search by property or city"
                value={filters.search}
                onChange={handleFilterChange}
              />
            </div>

            <div className="filter-field">
              <label htmlFor="city-filter">City</label>

              <select
                id="city-filter"
                name="city"
                value={filters.city}
                onChange={handleFilterChange}
              >
                <option value="all">All cities</option>

                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-field">
              <label htmlFor="bedroom-filter">Bedrooms</label>

              <select
                id="bedroom-filter"
                name="bedrooms"
                value={filters.bedrooms}
                onChange={handleFilterChange}
              >
                <option value="all">Any bedrooms</option>
                <option value="2">2 or more</option>
                <option value="3">3 or more</option>
                <option value="4">4 or more</option>
                <option value="5">5 or more</option>
              </select>
            </div>

            <div className="filter-field">
              <label htmlFor="price-filter">Maximum price</label>

              <select
                id="price-filter"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
              >
                <option value="all">Any price</option>
                <option value="300000">Up to $300,000</option>
                <option value="400000">Up to $400,000</option>
                <option value="500000">Up to $500,000</option>
                <option value="700000">Up to $700,000</option>
              </select>
            </div>

            <div className="filter-field">
              <label htmlFor="type-filter">Property type</label>

              <select
                id="type-filter"
                name="propertyType"
                value={filters.propertyType}
                onChange={handleFilterChange}
              >
                <option value="all">All types</option>

                {propertyTypes.map((propertyType) => (
                  <option key={propertyType} value={propertyType}>
                    {propertyType}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="clear-filter-button"
              type="button"
              onClick={clearFilters}
            >
              Clear filters
            </button>
          </div>

          <div className="properties-results-header">
            <div>
              <p className="eyebrow">Property results</p>

              <h2>
                {filteredProperties.length}{" "}
                {filteredProperties.length === 1 ? "home" : "homes"} found
              </h2>
            </div>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="property-grid">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="empty-state" role="status">
              <h2>No matching properties</h2>

              <p>
                Try changing your search or clearing one of the filters.
              </p>

              <button className="button" type="button" onClick={clearFilters}>
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Properties;