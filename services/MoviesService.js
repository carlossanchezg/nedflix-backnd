const Movies = require('../models/Movies');

module.exports = {
  uploadMovie: (body) => {
    const newMovie = new Movies(body);
    return newMovie.save();
  },
};
