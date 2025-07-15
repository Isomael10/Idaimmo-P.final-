import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/auth.css";
import { register } from "../api/auth"; // Ajout appel API

export default function Register() {
  const formRef = useRef();
  const navigate = useNavigate();

  // Ajout des états pour chaque champ + message d'erreur
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    try {
      await register({ name, email, password });
      alert("Inscription réussie !");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
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
            <input
              type="text"
              placeholder="Nom"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
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
            <input
              type="password"
              placeholder="Confirmer le mot de passe"
              required
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <button type="submit" className="auth-btn">S'inscrire</button>
            {error && (
              <div style={{ color: "red", marginTop: "1em" }}>{error}</div>
            )}
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