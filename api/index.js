const express = require('express');
const { errors } = require('celebrate');
const cors = require('cors');

const api = express();

api.use(express.urlencoded({ extended: true }));
api.use(express.json({ extended: true }));
api.use(cors());

api.get('/', (req, res) => {
  res.send('<h1>Hi from nedflix 🥳</h1>');
});

// Routes
api.use('/api/v1', require('../routes'));

api.use(errors());

module.exports = api;
