const mongoose = require('mongoose');
const { Schema } = mongoose;

const tenantSchema = new Schema({
  address: String,  
  name: String,
  email: String,
  phone: String,
  rent: String
});

mongoose.model('tenants', tenantSchema);
