const mongoose = require('mongoose');
const Subscriber = mongoose.model('subscribers');

module.exports = app => {
  app.post('/api/subscribe', async (req, res) => {
    const subscribe = req.body;
    const email = req.body.email;
    let options = [];

    for (field in subscribe) {
      if (subscribe[field] === true) {
        options.push(field);
      }
    }
    const subscriber = {
      name: subscribe.name,
      email: subscribe.email,
      options
    };
    const existingSubscriber = await Subscriber.findOne({
      email: subscriber.email
    });
    if (existingSubscriber) {
      res.redirect('/');
    } else {
      const newSubscriber = await new Subscriber(subscriber).save();
      res.redirect('/');
    }
  });
  app.post('/api/unsubscribe', async (req, res) => {
    const email = req.body.email;

    const existingSubscriber = await Subscriber.findOne({
      email: email
    });
    if (existingSubscriber) {
      Subscriber.remove({email: email}, (err) => {
        if(err) {
          console.log(err)
        }
        res.send('You have been unsubscribed!')
        console.log('unsubscribed')
      })
    } else {
        res.send('We don\'t have a record of this email address')
        console.log('can\'t find email')
    }
  })
};
