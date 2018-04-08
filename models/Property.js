const mongoose = require('mongoose');
const { Schema } = mongoose;

const propertySchema = new Schema({
  label: String,
  address: String,
  county: String,
  township_borough: String,
  type: String,
  bedroom: String,
  bathroom: String,
  rent: String,
  available: Boolean,
  images: [String]
});

mongoose.model('properties', propertySchema);
