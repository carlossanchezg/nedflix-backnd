const { MoviesService } = require('../services');

module.exports = {
  uploadMovie: async (req, res) => {
    try {
      const { body } = req;
      const newMovie = await MoviesService.uploadMovie(body);
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  getMovies: async (req, res) => {
    try {
      const movies = await MoviesService.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(404).json(error);
    }
  },
  findMovieById: async (req, res) => {
    try {
      const { id } = req.params;
      const movie = await MoviesService.findMovieById(id);
      res.status(200).json(movie);
    } catch (error) {
      res.status(404).json(error);
    }
  },
  findMovieByIdandUpdate: async (req, res) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const updatedMovie = await MoviesService.findMovieByIdandUpdate(id, body);
      res.status(200).json(updatedMovie);
    } catch (error) {
      res.status(404).json(error);
    }
  },
  findMovieByIdandDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await MoviesService.findMovieByIdandDelete(id);
      res.status(200).json({ message: 'Deleted movie' });
    } catch (error) {
      res.status(404).json(error);
    }
  },
  searchMoviesByTitle: async (req, res) => {
    try {
      const { title } = req.query;
      const foundMovie = await MoviesService.searchMoviesByTitle(title);
      // console.log(req.query);
      // console.log(foundMovie);
      if (foundMovie.length === 0) res.status(404).json({ message: 'Movie not found' });
      res.status(200).json(foundMovie);
    } catch (error) {
      res.status(404).json(error);
    }
  },
};
