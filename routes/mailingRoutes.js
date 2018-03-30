const nodemailer = require('nodemailer');
const keys = require('../config/keys');
const mailer = require('../services/mailing/config');
const applicationTemplate = require('../services/mailing/templates/application');

module.exports = app => {
  // POST!
  app.get('/mailing/application', (req, res) => {
    console.log('this is /mailing/application');

    const mailOptions = {
      from: keys.emailFrom,
      to: keys.emailTo,
      subject: 'nodemailer testing',
      html: applicationTemplate,
      replyTo: keys.replyTo,
      attachments: []
    };

    mailer.transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`email sent! ${info.response}`);
      }
    });
  });
  app.post('/mailing/query', (req, res) => {
    console.log('this is /mailing/application');

    const mailOptions = {
      from: keys.emailFrom,
      to: keys.emailTo,
      subject: 'Website Query',
      html: '',
      replyTo: keys.replyTo
    };

    mailer.transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`email sent! ${info.response}`);
      }
    });
  });
};
