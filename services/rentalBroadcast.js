const schedule = require('node-schedule');
const nodemailer = require('nodemailer');
const keys = require('../config/keys');
const mailer = require('../services/mailing/config');
const mongoose = require('mongoose');
const Subscriber = mongoose.model('subscribers');
const Property = mongoose.model('properties');

const broadcastRule = new schedule.RecurrenceRule();
broadcastRule.second = 10;

brodcastAvailables = async () => {
  let availableList = [];

  const availables = await Property.find({ available: true });
  availables.map(available =>
    availableList.push(available.county.toLowerCase())
  );

  const subscribers = await Subscriber.find({});

  subscribers.map(subscriber => {
    for (let i = 0; i < subscriber.options.length; i++) {
      if (availableList.indexOf(subscriber.options[i]) > -1) {
        console.log(subscriber.options[i], subscriber.name);
        const broadcast = schedule.scheduleJob(broadcastRule, () => {
          const mailOptions = {
            from: keys.emailFrom,
            to: subscriber.email,
            subject: `Rentals this week in ${subscriber.options[i]} and more!`,
            text: 'content~',
            replyTo: keys.emailFrom
          };

          // mailer.transporter.sendMail(mailOptions, (err, info) => {
          //   if (err) {
          //     console.log(err);
          //   } else {
          //     console.log(`email sent! ${info.response}`);
          //   }
          // });
        });
        break;
      }
    }
  });
};
brodcastAvailables();
