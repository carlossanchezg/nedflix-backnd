const express = require('express');

const router = express.Router();

const { MoviesController } = require('../controllers');

// CRUD
// CREATE
router.post('/uploadmovie', MoviesController.uploadMovie);

// READ (ALL)
router.get('/movies', MoviesController.getMovies);

// READ (ONE)
router.get('/movies/:id', MoviesController.findMovieById);

// UPDATE
router.patch('/movies/:id', MoviesController.findMovieByIdandUpdate);

// DELETE
router.delete('/movies/:id', MoviesController.findMovieByIdandDelete);

// SEARCH MOVIE BY TITLE
router.get('/searchmovie', MoviesController.searchMoviesByTitle);

module.exports = router;
