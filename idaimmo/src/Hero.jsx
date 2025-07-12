import React, { useRef } from "react";

export default function Hero({ onSearch }) {
  const typeRef = useRef();
  const statusRef = useRef();
  const locationRef = useRef();

  function handleSearch(e) {
    e.preventDefault();
    // Optionnel : ici nous pouvez filtrer ou transmettre les valeurs à App (ismaila note)
    onSearch((prev) => prev.filter((p) => {
      return (typeRef.current.value === "all" || p.type === typeRef.current.value)
        && (statusRef.current.value === "all" || p.status === statusRef.current.value)
        && (locationRef.current.value === "" || p.address.toLowerCase().includes(locationRef.current.value.toLowerCase()));
    }));
    window.location.hash = "#properties";
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Trouvez votre bien immobilier idéal au Sénégal</h1>
        <p>
          Achat, vente et location d'appartements, maisons et villas dans les meilleurs quartiers
        </p>
        <form className="search-container" onSubmit={handleSearch}>
          <div className="search-filters">
            <select id="type-filter" ref={typeRef}>
              <option value="all">Tous les types</option>
              <option value="Appartement">Appartement</option>
              <option value="Maison">Maison</option>
              <option value="Villa">Villa</option>
              <option value="Terrain">Terrain</option>
              <option value="Commerce">Commerce</option>
              <option value="Immeuble">Immeuble</option>
            </select>
            <select id="status-filter" ref={statusRef}>
              <option value="all">Tous les statuts</option>
              <option value="À vendre">À vendre</option>
              <option value="À louer">À louer</option>
            </select>
            <input type="text" id="location-filter" ref={locationRef} placeholder="Emplacement" />
          </div>
          <button id="search-btn" className="btn-primary" type="submit">
            Rechercher
          </button>
        </form>
        <div className="hero-buttons">
          <a href="#properties" className="btn-secondary">
            Voir nos biens
          </a>
          <a href="#contact" className="btn-primary">
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
}