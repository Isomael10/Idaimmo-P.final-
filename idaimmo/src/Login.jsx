import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/auth.css";

export default function Login() {
  const formRef = useRef();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Logique de connexion ici
    alert("Connexion réussie !");
    
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <h2>Bienvenue&nbsp;!</h2>
          <p>Entrez vos identifiants pour accéder à votre compte.</p>
        </div>
        <div className="auth-right">
          <h3 className="auth-title">Connection</h3>
          <form ref={formRef} className="auth-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Mot de passe" required />
            <button type="submit" className="auth-btn">Se connecter</button>
          </form>
          <div className="auth-footer">
            <span>Vous n'avez pas de compte ? </span>
            <Link to="/register">Créez-en un</Link>
          </div>
        </div>
      </div>
    </div>
  );
}