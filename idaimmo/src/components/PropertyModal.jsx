import React from "react";

export default function PropertyModal({ property, onClose }) {
  if (!property) return null;
  const statusClass =
    property.status === "À vendre"
      ? "status-selling"
      : property.status === "À louer"
      ? "status-renting"
      : "";

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      "Merci pour votre message. Un conseiller vous contactera très prochainement."
    );
    onClose();
  }

  return (
    <div id="property-modal" className="modal" style={{ display: "block" }}>
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>
          &times;
        </span>
        <div className="property-details-container">
          <div className="property-gallery">
            <div
              className="gallery-main"
              style={{
                backgroundImage: `url('${property.image ||
                  "https://via.placeholder.com/800x500?text=Pas+d%27image"}')`
              }}
            ></div>
          </div>
          <div className="property-detail-header">
            <h2 className="property-detail-title">{property.title}</h2>
            <div className="property-detail-price">
              {property.status.includes("louer")
                ? property.price.toLocaleString() + " FCFA/mois"
                : property.price.toLocaleString() + " FCFA"}
            </div>
            <div className="property-detail-address">
              <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/map-pin.svg" alt="Location" width="18" height="18" /> {property.address}
            </div>
            <div
              className={`property-status ${statusClass}`}
              style={{ display: "inline-block", marginTop: 10 }}
            >
              {property.status}
            </div>
          </div>
          <div className="property-detail-features">
            <div className="property-detail-feature">
              <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/maximize.svg" alt="Area" width="18" height="18" />
              <span>{property.area} m²</span>
            </div>
            <div className="property-detail-feature">
              <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/home.svg" alt="Rooms" width="18" height="18" />
              <span>{property.rooms} pièces</span>
            </div>
            <div className="property-detail-feature">
              <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/moon.svg" alt="Bedrooms" width="18" height="18" />
              <span>{property.bedrooms} chambres</span>
            </div>
            <div className="property-detail-feature">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/homeassistant.svg" alt="Property type" width="18" height="18" />
              <span>{property.type}</span>
            </div>
          </div>
          <div className="property-detail-description">
            <h3>Description</h3>
            <p>{property.description || "Aucune description disponible."}</p>
          </div>
          <div className="property-contact">
            <h3>Intéressé par ce bien ?</h3>
            <form className="property-contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Nom complet</label>
                <input type="text" id="contact-name" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input type="email" id="contact-email" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-phone">Téléphone</label>
                <input type="tel" id="contact-phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  defaultValue={`Je suis intéressé(e) par ce bien (${property.title}). Merci de me contacter pour plus d'informations.`}
                />
              </div>
              <button type="submit" className="btn-primary">
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}