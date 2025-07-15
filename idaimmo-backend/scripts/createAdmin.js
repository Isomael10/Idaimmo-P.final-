const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb://localhost:27017/nomdetabase', { useNewUrlParser: true, useUnifiedTopology: true });

async function createAdmin() {
  const email = "admin@mail.com";
  const password = "admin123"; // Change ce mot de passe !
  const name = "Administrateur";
  try {
    const exist = await User.findOne({ email });
    if (exist) {
      console.log("Cet admin existe déjà.");
      process.exit(0);
    }
    const admin = new User({ name, email, password, role: "admin" });
    await admin.save();
    console.log("Utilisateur admin créé !");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
createAdmin();