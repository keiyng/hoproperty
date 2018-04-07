const mongoose = require('mongoose');
const { Schema } = mongoose;

const subscriberSchema = new Schema({
  name: String,
  email: String,
  options: [String]
});

mongoose.model('subscribers', subscriberSchema);
