const mongoose = require('mongoose');
const Property = mongoose.model('properties');

module.exports = app => {
  app.get('/property/rental', async (req, res) => {
    const availableRentals = await Property.find({ available: true }).select({
      block: false,
      lot: false,
      owner: false
    });
    res.send(availableRentals);
    console.log('this is /rental');
  });

  app.get('/property/rental/:label', async (req, res) => {
    const property = await Property.findOne({
      label: req.params.label,
      available: true
    }).select({ block: false, lot: false, owner: false });
    if (property) {
      return res.send(property);
    }
    res.status(404).send("this page doesn't exist");

    console.log('this is /rental/label');
  });
};
