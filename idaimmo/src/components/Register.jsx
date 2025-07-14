import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/auth.css";

export default function Register() {
  const formRef = useRef();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Logique d'inscription ici
    alert("Inscription réussie !");
    // navigate('/login');
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <h2>Créer un<br/>compte</h2>
          <p>Entrez vos informations pour créer votre compte.</p>
        </div>
        <div className="auth-right">
          <h3 className="auth-title">Inscription</h3>
          <form ref={formRef} className="auth-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nom" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Mot de passe" required />
            <input type="password" placeholder="Confirmer le mot de passe" required />
            <button type="submit" className="auth-btn">S'inscrire</button>
          </form>
          <div className="auth-footer">
            <span>Vous avez déjà un compte ? </span>
            <Link to="/login">Se connecter</Link>
          </div>
        </div>
      </div>
    </div>
  );
}