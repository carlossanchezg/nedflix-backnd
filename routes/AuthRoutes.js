const express = require('express');

const router = express.Router();

const { AuthController } = require('../controllers');

const { AuthValidator } = require('../validators');

// CRUD
// CREATE
router.post('/signup',
  AuthValidator.register,
  AuthController.register);

router.post('/login',
  AuthValidator.login,
  AuthController.login);

module.exports = router;
