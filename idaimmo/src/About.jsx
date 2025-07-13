import React from "react";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>À propos d&apos;Ida-immo</h2>
            <p>
              Ida-immo est une agence immobilière leader au Sénégal, spécialisée dans la vente et la location de biens immobiliers de qualité. Fondée en 2025, notre agence s&apos;est bâtie une solide réputation grâce à notre expertise du marché local et notre engagement envers la satisfaction client.
            </p>
            <p>
              Notre équipe de professionnels expérimentés connaît parfaitement le marché immobilier sénégalais et travaille sans relâche pour vous offrir un service personnalisé et de qualité. Que vous cherchiez à acheter, vendre ou louer un bien, nous sommes là pour vous accompagner à chaque étape de votre projet.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Biens disponibles</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Clients satisfaits</span>
              </div>
              <div className="stat">
                <span className="stat-number">13</span>
                <span className="stat-label">Années d&apos;expérience</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img
              src="image 1.jpg"
              alt="Notre agence ImmoGest"
            />
          </div>
        </div>
      </div>
    </section>
  );
}