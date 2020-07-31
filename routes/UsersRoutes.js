const express = require('express');

const router = express.Router();

const { UsersController } = require('../controllers');

// CRUD
// CREATE
router.post('/users', UsersController.create);

// // READ (ALL)
router.get('/users', UsersController.getUsers);

// // READ (ONE)
router.get('/users/:id', UsersController.findUserById);

// UPDATE
router.patch('/users/:id', UsersController.findUserByIdandUpdate);

// DELETE
router.delete('/users/:id', UsersController.deleteUser);

module.exports = router;
