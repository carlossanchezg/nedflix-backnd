const express = require('express');

const router = express.Router();

const { UsersController } = require('../controllers');
// CRUD
// CREATE
router.post('/users', UsersController.create);

// // READ (ALL)
// router.get('/users', UsersController.getUsers);

// // READ (ONE)
// router.get('/users/:id', UsersController.findUserById);

module.exports = router;
