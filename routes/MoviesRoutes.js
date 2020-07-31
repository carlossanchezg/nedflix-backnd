const express = require('express');

const router = express.Router();

const { MoviesController } = require('../controllers');

// CRUD
// CREATE
router.post('/uploadmovie', MoviesController.uploadMovie);

module.exports = router;
