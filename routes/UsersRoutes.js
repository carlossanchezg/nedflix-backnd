const express = require('express');

const router = express.Router();

const { Users } = require('../models');

// CRUD
// CREATE
router.post('/users', async (req, res) => {
  try {
    const newUser = new Users(req.body);
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
