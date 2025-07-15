const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (await User.findOne({ email })) {
      return res.status(409).json({ error: "Cet email est déjà utilisé." });
    }
    const user = await User.create({ name, email, password });
    res.status(201).json({ message: "Inscription réussie !" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: "Email ou mot de passe invalide." });
    }
    // Générer un token JWT
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || "supersecret",
      { expiresIn: '2h' }
    );
    res.json({ token, user: { name: user.name, email: user.email } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};