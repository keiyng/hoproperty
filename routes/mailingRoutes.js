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
      replyTo: application.email
    };

    mailer.transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res.json({error: 'We couldn\'t submit your application. Please try again'})
        console.log(err)
      } else {
        console.log(`email sent! ${info.response}`);
        res.json({success: 'Your application has been submitted successfully. We will contact you if it matches our requirement.'})
      }
    });
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
        res.json({error: 'We couldn\'t submit your message. Please try again'})
        console.log(err)
      } else {
        console.log(`email sent! ${info.response}`);
        res.json({success: 'Your message has been submitted successfully. We will reply as soon as possible.'})
      }
    });
  });
};
