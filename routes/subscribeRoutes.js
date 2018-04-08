const mongoose = require('mongoose');
const Subscriber = mongoose.model('subscribers');

module.exports = app => {
app.post('/api/subscribe', async (req, res) => {
    const subscribe = req.body;
    const email = req.body.email;
    let options = []

    for (field in subscribe) {
      if(subscribe[field] === true) {
        options.push(field)
      }
    }
    const subscriber = {
      name: subscribe.name,
      email: subscribe.email,
      options
    }
    const existingSubscriber = await Subscriber.findOne({ email: subscriber.email });
    if(existingSubscriber) {
      res.redirect('/');
    } else {
      const newSubscriber = await new Subscriber(subscriber).save();
      res.redirect('/');
    }




  });
}
