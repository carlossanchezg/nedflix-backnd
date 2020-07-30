const express = require('express');
const api = express();

api.use(express.urlencoded({ extended: true }));
api.use(express.json({ extended: true }));

api.get('/', (req, res) => {
    res.send('<h1>Hi from nedflix 🥳</h1>');
    // res.json({ message: 'Hi from nedflix 🥳' });
});

module.exports = api;