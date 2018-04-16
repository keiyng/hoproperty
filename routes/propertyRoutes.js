const mongoose = require('mongoose');
const Property = mongoose.model('properties');

module.exports = app => {

  app.get('/api/property', async (req, res) => {
    const properties = await Property.find({}).select({
      block: false,
      lot: false,
      owner: false
    });
    res.send(properties);
  });

  app.get('/api/property/:label', async (req, res) => {
    const property = await Property.findOne({
      label: req.params.label,
      available: true
    }).select({ block: false, lot: false, owner: false });
    if (property) {
      return res.send(property);
    }
    res.status(404).send("this page doesn't exist");

    console.log('this is /property/:label');
  });
};
