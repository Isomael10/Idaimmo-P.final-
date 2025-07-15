require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const propertyRoutes = require('./routes/properties');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/properties', propertyRoutes);

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connecté');
  app.listen(PORT, () => console.log(`Serveur lancé sur port ${PORT}`));
})
.catch(err => console.error('Erreur MongoDB:', err));
// ... autres imports
const authRoutes = require('./routes/auth');
// ...

app.use('/api/auth', authRoutes);