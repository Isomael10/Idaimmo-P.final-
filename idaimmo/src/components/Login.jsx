import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/auth.css";
import { login } from "../api/auth"; // Import de la fonction d'API

export default function Login() {
  const formRef = useRef();
  const navigate = useNavigate();

  // États pour les champs et l'affichage d'erreur
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const { token, user } = await login({ email, password });
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user)); // Ajoute le stockage de l'utilisateur
      alert("Connexion réussie !");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
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
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button type="submit" className="auth-btn">Se connecter</button>
            {error && (
              <div style={{ color: "red", marginTop: "1em" }}>{error}</div>
            )}
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
