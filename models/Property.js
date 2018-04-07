const mongoose = require('mongoose');
const { Schema } = mongoose;

const propertySchema = new Schema({
  label: String,
  address: String,
  county: String,
  township_borough: String,
  type: String,
  block: Number,
  lot: Number,
  owner: String,
  available: Boolean,
  images: [String]
});

mongoose.model('properties', propertySchema);
