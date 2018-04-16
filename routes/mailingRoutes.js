const nodemailer = require('nodemailer');
const keys = require('../config/keys');
const mailer = require('../services/mailing/config');
const applicationTemplate = require('../services/mailing/templates/application');
const queryTemplate = require('../services/mailing/templates/query');

module.exports = app => {
  app.post('/api/application', (req, res) => {
    const application = req.body;

    const mailOptions = {
      from: keys.emailFrom,
      to: keys.emailTo,
      subject: `Rental Application - ${application.address}`,
      html: applicationTemplate(application),
      replyTo: application.email,
      attachments: []
    };

    mailer.transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`email sent! ${info.response}`);
      }
    });
    res.redirect('/');
  });

  app.post('/api/query', (req, res) => {
    const query = req.body;

    const mailOptions = {
      from: keys.emailFrom,
      to: keys.emailTo,
      subject: 'Website Contact',
      html: queryTemplate(query),
      replyTo: query.email
    };

    mailer.transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        return false;
      } else {
        console.log(`email sent! ${info.response}`);
        res.redirect('/');
      }
    });
  });
};
