const nodemailer = require('nodemailer');
const keys = require('../../config/keys');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: keys.emailTo,
        pass: keys.emailPassword
    }
});

module.exports = {transporter};
