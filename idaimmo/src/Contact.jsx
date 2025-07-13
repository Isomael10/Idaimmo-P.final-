import React, { useRef } from "react";

export default function Contact() {
  const formRef = useRef(null);
  const newsletterRef = useRef(null);

  function handleForm(e) {
    e.preventDefault();
    alert("Merci pour votre message. Un conseiller vous contactera très prochainement.");
    formRef.current.reset();
  }

  function handleNewsletter(e) {
    e.preventDefault();
    alert("Merci pour votre inscription à notre newsletter !");
    newsletterRef.current.reset();
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contactez-nous</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <a href="https://goo.gl/maps/xyz" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/map-pin.svg" alt="Location" width="20" height="20" />
              </a>
              <div>
                <h4>Adresse</h4>
                <p>123 Avenue Principale, Dakar, Sénégal</p>
              </div>
            </div>
            <div className="info-item">
              <a href="tel:+221771234567">
                <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/phone.svg" alt="Phone" width="20" height="20" />
              </a>
              <div>
                <h4>Téléphone</h4>
                <p>+221 77 123 45 67</p>
              </div>
            </div>
            <div className="info-item">
              <a href="mailto:contact@idammos.sn">
                <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/mail.svg" alt="Email" width="20" height="20" />
              </a>
              <div>
                <h4>Email</h4>
                <p>contact@idammos.sn</p>
              </div>
            </div>
            <div className="info-item"></div>
            <div className="social-links">
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="public/facebook.svg" alt="Facebook" width="24" height="24" />
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="public/twitter.svg" alt="Twitter" width="24" height="24" />
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="public/instagram.svg" alt="Instagram" width="24" height="24" />
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="public/linkedin.svg" alt="LinkedIn" width="24" height="24" />
              </a>
            </div>
          </div>
          <div className="contact-form">
            <form id="inquiry-form" ref={formRef} onSubmit={handleForm}>
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input type="tel" id="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <select id="subject">
                  <option value="Achat">Achat d&apos;un bien</option>
                  <option value="Vente">Vente d&apos;un bien</option>
                  <option value="Location">Location</option>
                  <option value="Information">Demande d&apos;information</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn-primary">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}