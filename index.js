const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const proxy = require('http-proxy-middleware');

require('./models/Property');
require('./models/Subscriber');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
const app = express();

app.use(bodyParser.json());

require('./routes/propertyRoutes')(app);
require('./routes/mailingRoutes')(app);
require('./routes/subscribeRoutes')(app);
require('./services/rentalBroadcast');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
