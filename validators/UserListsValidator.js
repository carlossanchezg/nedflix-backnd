const {
  celebrate,
  Joi,
  Segments,
} = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name_list: Joi.string(),
      list_content: Joi.array().items(),
    }),
  }),
};
