import React, { useEffect, useState } from "react";

export default function BackToTop() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handler = () => setActive(window.scrollY > 300);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <a
      href="#home"
      className={`back-to-top${active ? " active" : ""}`}
      aria-label="Retour en haut"
    >
      <img src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/chevron-up.svg" alt="Back to top" width="20" height="20" />
    </a>
  );
}