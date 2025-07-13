import React from "react";

export default function PropertyCard({ property, onClick }) {
  const statusClass =
    property.status === "À vendre"
      ? "status-selling"
      : property.status === "À louer"
      ? "status-renting"
      : "";

  return (
    <div className="property-card" onClick={() => onClick(property)}>
      <div
        className="property-image"
        style={{
          backgroundImage: `url('${property.image ||
            "https://via.placeholder.com/300x200?text=Pas+d%27image"}')`
        }}
      >
        <div className={property-status ${statusClass}}>{property.status}</div>
      </div>
      <div className="property-info">
        <h3 className="property-title">{property.title}</h3>
        <div className="property-price">
          {property.status.includes("louer")
            ? property.price.toLocaleString() + " FCFA/mois"
            : property.price.toLocaleString() + " FCFA"}
        </div>
        <div className="property-location">
          <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/map-pin.svg" alt="Location" width="16" height="16" /> {property.address}
        </div>
        <div className="property-features">
          <div className="feature">
            <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/maximize.svg" alt="Area" width="16" height="16" /> {property.area} m²
          </div>
          <div className="feature">
            <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/home.svg" alt="Rooms" width="16" height="16" /> {property.rooms} pièces
          </div>
          <div className="feature">
            <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/moon.svg" alt="Bedrooms" width="16" height="16" /> {property.bedrooms} ch.
          </div>
        </div>
      </div>
    </div>
  );
}