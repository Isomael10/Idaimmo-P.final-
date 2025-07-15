const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function requireAdmin(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Token manquant" });
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "supersecret");
    const user = await User.findById(decoded.userId);
    if (!user || user.role !== "admin") {
      return res.status(403).json({ error: "Accès interdit" });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ error: "Token invalide" });
  }
}

module.exports = { requireAdmin };