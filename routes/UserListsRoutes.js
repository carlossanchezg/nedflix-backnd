const express = require('express');

const router = express.Router();

const { UserListsController } = require('../controllers');

// CRUD
// CREATE
router.post('/users/:id/newlist', UserListsController.createList);

module.exports = router;
