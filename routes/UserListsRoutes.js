const express = require('express');

const router = express.Router();

const { UserListsController } = require('../controllers');

// CRUD
// CREATE
router.post('/users/:id/newlist', UserListsController.createList);

// READ (ALL)
router.get('/users/:id/lists', UserListsController.getAllUserLists);

// READ (ONE)
router.get('/users/:id/lists/:list', UserListsController.findOneUserListById);

// UPDATE
router.patch('/users/:id/lists/:list', UserListsController.updateList);

// DELETE
router.delete('/users/:id/lists/:list', UserListsController.deleteList);

// MOVIES
// ADD MOVIE TO LIST
router.post('/users/:id/lists/:list/:movie', UserListsController.addMovietoList);

// REMOVE MOVIE TO LIST
router.patch('/users/:id/lists/:list/:movie', UserListsController.removeMovietoList);

module.exports = router;
