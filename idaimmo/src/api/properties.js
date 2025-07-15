// Exemple : src/api/properties.js
export async function fetchProperties() {
  const res = await fetch('http://localhost:5000/api/properties');
  return res.json();
}