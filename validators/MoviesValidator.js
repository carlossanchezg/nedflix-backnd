const {
  celebrate,
  Joi,
  Segments,
} = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      gender: Joi.array().items(Joi.string()).required(),
      synopsis: Joi.string().required(),
      year: Joi.number().required(),
      cover: Joi.string().required(),
      movie_free: Joi.bool().default(false).required(),
      video_trailer: Joi.string().required(),
      video_movie: Joi.string().required(),
      nedflix_originals: Joi.bool().required(),
      trending_movie: Joi.bool().required(),
      large_cover: Joi.string().required(),
    }),
  }),
};
