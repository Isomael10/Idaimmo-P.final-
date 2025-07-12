import React from "react";
import PropertyCard from "./PropertyCard";

export default function FeaturedProperties({ properties, onSelect }) {
  const available = properties.filter(
    (p) => p.status === "À vendre" || p.status === "À louer"
  );
  const display = available.slice(0, 3);

  return (
    <section id="featured" className="featured-properties">
      <div className="container">
        <h2>Biens à la une</h2>
        <div className="featured-grid">
          {display.length === 0 ?