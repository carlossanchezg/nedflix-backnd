/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const mongoose = require('mongoose');

const { MONGO_URI } = require('../config');

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected 🥳'.blue.bold))
  .catch(() => console.log('Error connecting to database 😇'.red.bold));
