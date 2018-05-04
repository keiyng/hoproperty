const schedule = require('node-schedule');
const nodemailer = require('nodemailer');
const keys = require('../config/keys');
const mailer = require('../services/mailing/config');
const mongoose = require('mongoose');
const Subscriber = mongoose.model('subscribers');
const Property = mongoose.model('properties');
const broadcastTemplate = require('./mailing/templates/broadcast');

const broadcastRule = new schedule.RecurrenceRule();
broadcastRule.dayOfWeek = 5;

brodcastAvailables = async () => {
let countyList = [];

const availables = await Property.find({ available: true });

availables.map(available => {
    countyList.push(available.county.toLowerCase());
  });

  const subscribers = await Subscriber.find({});
  subscribers.map(subscriber => {
    for (let i = 0; i < subscriber.options.length; i++) {
      if (countyList.indexOf(subscriber.options[i]) > -1) {
        const broadcast = schedule.scheduleJob(broadcastRule, () => {
          const mailOptions = {
            from: keys.emailFrom,
            to: subscriber.email,
            subject: `Rentals this week in ${subscriber.options[i][0].toUpperCase() + subscriber.options[i].substr(1)} county and more!`,
            html: broadcastTemplate(subscriber, availables),
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
