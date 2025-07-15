import React, { useRef } from "react";

export default function Footer() {
  const newsletterRef = useRef(null);
  function handleNewsletter(e) {
    e.preventDefault();
    alert("Merci pour votre inscription à notre newsletter !");
    newsletterRef.current.reset();
  }

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <div className="footer-logo">
              <img src="/public/favicon.png" alt="Building" width="24" height="24" />
              <h3>Ida-mmo</h3>
            </div>
            <p>
              Votre partenaire de confiance pour tous vos projets immobiliers au Sénégal depuis 2025.
            </p>
            <div className="footer-social">
               <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="public/facebook.png" alt="Facebook" width="24" height="24" />
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="public/twitter.png" alt="Twitter" width="24" height="24" />
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="public/instagram.png" alt="Instagram" width="24" height="24" />
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="public/linkedin.png" alt="LinkedIn" width="24" height="24" />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Liens rapides</h4>
            <ul className="footer-links">
              <li><a href="#home">Accueil</a></li>
              <li><a href="#properties">Biens Immobiliers</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">À Propos</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Vente de biens</a></li>
              <li><a href="#services">Location</a></li>
              <li><a href="#services">Investissement</a></li>
              <li><a href="#services">Gestion locative</a></li>
              <li><a href="#services">Services juridiques</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>Abonnez-vous pour recevoir nos dernières offres et actualités.</p>
            <form className="newsletter-form" ref={newsletterRef} onSubmit={handleNewsletter}>
              <input type="email" placeholder="Votre email" required />
              <button type="submit">
                <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/send.svg" alt="Send" width="16" height="16" />
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Ida-immo. Tous droits réservés.</p>
          <div className="footer-bottom-links">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#">Conditions d&apos;utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}