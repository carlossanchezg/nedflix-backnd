const express = require('express');

const router = express.Router();

const { MoviesController } = require('../controllers');

// CRUD
// CREATE
router.post('/uploadmovie', MoviesController.uploadMovie);

// READ (ALL)
router.get('/movies', MoviesController.getMovies);

module.exports = router;
