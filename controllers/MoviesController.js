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
};
