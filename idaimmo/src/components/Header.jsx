import React, { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Récupérer l'utilisateur connecté au chargement
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Déconnexion
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    // Optionnel : window.location.reload();
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="header-container">
        <div className="logo">
          <img src="./public/favicon.png" alt="logo" width="24" height="24" />
          <h1>Ida-immo</h1>
        </div>
        <nav className={`main-nav${mobileMenu ? " active" : ""}`}>
          <ul>
            <li><a href="#home" className="active">Accueil</a></li>
            <li><a href="#properties">Biens Immobiliers</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">À Propos</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              {user ? (
                <>
                  <span style={{ color: 'white', fontWeight: "bold" }}>
                    {user.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    style={{
                      marginLeft: "10px",
                      background: "transparent",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                      fontWeight: "bold"
                    }}
                  >
                    Déconnexion
                  </button>
                </>
              ) : (
                <a href="/login" style={{ color: 'white' }}>Connexion</a>
              )}
            </li>
          </ul>
        </nav>
        <div
          className="mobile-menu-btn"
          onClick={() => setMobileMenu((m) => !m)}
        >
          <i className={`fas ${mobileMenu ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </div>
    </header>
  );
}