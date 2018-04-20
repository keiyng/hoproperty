const mongoose = require('mongoose');
const Subscriber = mongoose.model('subscribers');

module.exports = app => {
  app.post('/api/subscribe', async (req, res, done) => {
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

    const existingSubscriber = await Subscriber.findOne({email: subscriber.email});

    if (existingSubscriber) {
      res.json({error: 'This email is already on our subscribers list'})
    } else {
      const newSubscriber = await new Subscriber(subscriber).save();
      res.json({success: 'Thank you. You\'ve been subscribed successfully.'})
    }
  });

  app.patch('/api/update_preference', async (req, res, done) => {
    const update = req.body;
    const email = req.body.email;
    let options = [];

    for (field in update) {
      if (update[field] === true) {
        options.push(field);
      }
    }

    const existingSubscriber = await Subscriber.findOneAndUpdate({email: email}, {options: options});

    if(existingSubscriber === null) {
      res.json({error: 'This email is not on our subscribers list'})
    } else {
      res.json({success: 'Your preference has been updated successfully'})
    }
  })


  app.delete('/api/unsubscribe/:email', async (req, res) => {
    const email = req.params.email;

    Subscriber.findOneAndRemove({email: email}, (err, doc) => {
      if(err) {
        console.log('error')
        res.json({error: 'Error occured and we were not able to unsubscribe'})
      }
      if(doc === null) {
        res.json({error : 'This email is not on our subscribers list'})
      } else {
        res.json({success: 'You have been unsubscribed'})
      }
    });
  })


};
