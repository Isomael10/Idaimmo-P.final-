const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: String,
  type: String,
  status: String,
  price: Number,
  area: Number,
  rooms: Number,
  bedrooms: Number,
  address: String,
  description: String,
  image: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Property', propertySchema);