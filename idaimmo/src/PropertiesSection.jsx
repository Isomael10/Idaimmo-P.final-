import React, { useRef, useState } from "react";
import PropertyCard from "./PropertyCard";

export default function PropertiesSection({
  properties, onSelect, allProperties, onFilter,
}) {
  const searchRef = useRef();
  const typeRef = useRef();
  const statusRef = useRef();
  const sortRef = useRef();
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  function filterProperties() {
    let filtered = allProperties;
    const search = searchRef.current.value.toLowerCase();
    const type = typeRef.current.value;
    const status = statusRef.current.value;
    const sort = sortRef.current.value;

    if (search)
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(search) ||
          p.address.toLowerCase().includes(search) ||
          p.description.toLowerCase().includes(search)
      );
    if (type !== "all") filtered = filtered.filter((p) => p.type === type);
    if (status !== "all") filtered = filtered.filter((p) => p.status === status);

    switch (sort) {
      case "price-asc":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "area-asc":
        filtered = [...filtered].sort((a, b) => a.area - b.area);
        break;
      case "area-desc":
        filtered = [...filtered].sort((a, b) => b.area - a.area);
        break;
      default:
        // do nothing for "newest"
        break;
    }
    onFilter(filtered);
    setPage(1);
  }

  const paginated = properties.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <section id="properties" className="properties-section">
      <div className="container">
        <h2>Nos biens immobiliers</h2>
        <div className="filter-bar">
          <div className="search-input">
            <input
              type="text"
              id="property-search"
              ref={searchRef}
              placeholder="Rechercher un bien..."
              onInput={filterProperties}
            />
            <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/search.svg" alt="Search" width="18" height="18" />
          </div>
          <div className="filter-controls">
            <select id="property-type" ref={typeRef} onChange={filterProperties}>
              <option value="all">Tous les types</option>
              <option value="Appartement">Appartement</option>
              <option value="Maison">Maison</option>
              <option value="Villa">Villa</option>
              <option value="Terrain">Terrain</option>
              <option value="Commerce">Commerce</option>
              <option value="Immeuble">Immeuble</option>
            </select>
            <select id="property-status" ref={statusRef} onChange={filterProperties}>
              <option value="all">Tous les statuts</option>
              <option value="À vendre">À vendre</option>
              <option value="À louer">À louer</option>
            </select>
            <select id="property-sort" ref={sortRef} onChange={filterProperties}>
              <option value="newest">Plus récents</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="area-asc">Surface croissante</option>
              <option value="area-desc">Surface décroissante</option>
            </select>
          </div>
        </div>
        <div className="properties-grid">
          {paginated.length === 0 ? (
            <p className="empty-message">Aucun bien ne correspond à votre recherche</p>
          ) : (
            paginated.map((property) => (
              <PropertyCard
                property={property}
                key={property.id}
                onClick={onSelect}
              />
            ))
          )}
        </div>
        <div className="pagination">
          {[...Array(totalPages)].map((_, idx) => (
            <a
              href="#properties"
              key={idx + 1}
              className={`page-link${page === idx + 1 ? " active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setPage(idx + 1);
              }}
            >
              {idx + 1}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}