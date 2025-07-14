import React from "react";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Nos services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/home.svg" alt="Home sales" width="32" height="32" />
            </div>
            <h3>Vente de biens</h3>
            <p>
              Nous proposons une large gamme de propriétés à vendre dans tout le Sénégal, de l&apos;appartement à la villa de luxe.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/key.svg" alt="Rental" width="32" height="32" />
            </div>
            <h3>Location</h3>
            <p>
              Trouvez votre location idéale parmi notre sélection de biens disponibles à Dakar et dans les autres régions.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/trending-up.svg" alt="Investment" width="32" height="32" />
            </div>
            <h3>Investissement</h3>
            <p>
              Nos experts vous conseillent pour réaliser les meilleurs investissements immobiliers au Sénégal.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/users.svg" alt="Property management" width="32" height="32" />
            </div>
            <h3>Gestion locative</h3>
            <p>
              Nous prenons en charge la gestion complète de vos biens en location, de la recherche de locataires à l&apos;entretien.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/file-text.svg" alt="Legal services" width="32" height="32" />
            </div>
            <h3>Services juridiques</h3>
            <p>
              Notre équipe vous accompagne dans toutes les démarches administratives et juridiques liées à vos transactions immobilières.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/search.svg" alt="Custom search" width="32" height="32" />
            </div>
            <h3>Recherche personnalisée</h3>
            <p>
              Nous recherchons pour vous le bien qui correspond exactement à vos critères et à votre budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}