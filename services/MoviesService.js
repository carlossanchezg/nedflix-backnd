const Movies = require('../models/Movies');

module.exports = {
  uploadMovie: (body) => {
    const newMovie = new Movies(body);
    return newMovie.save();
  },
  getMovies: () => Movies.find(),
  findMovieById: (id) => Movies.findById(id),
  findMovieByIdandUpdate: (id, body) => Movies.findByIdAndUpdate(id, body, { new: true }),
  findMovieByIdandDelete: (id) => Movies.findByIdAndDelete(id),
  searchMoviesByTitle: (title) => Movies.find({ title }),
};
