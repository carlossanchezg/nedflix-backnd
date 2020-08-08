const mongoose = require('mongoose');

const { Schema } = mongoose;

const MoviesSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  gender: {
    type: [String],
    required: true,
    validate: [(value) => value.length > 0, 'The film requires genres'],
  },
  synopsis: {
    type: String,
  },
  year: {
    type: Number,
    required: true,
    trim: true,
  },
  cover: {
    type: String,
    required: true,
    trim: true,
  },
  movie_free: {
    type: Boolean,
    required: true,
    default: Boolean,
  },
  video_trailer: {
    type: String,
    required: true,
    trim: true,
  },
  video_movie: {
    type: String,
    required: true,
    trim: true,
  },
  nedflix_originals: {
    type: Boolean,
    required: true,
  },
  trending_movie: {
    type: Boolean,
    required: true,
  },
  large_cover: {
    type: String,
    required: true,
    trim: true,
  },
});

const Movies = mongoose.model('Movies', MoviesSchema);

module.exports = Movies;
