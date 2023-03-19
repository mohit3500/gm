const Joi = require('joi');

exports.registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(5).required(),
    password: Joi.string().min(5).required(),
    email: Joi.string().min(5).required().email(),
  });
  return schema.validate(data);
};

exports.loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(5).required().email(),
    password: Joi.string().min(5).required(),
  });
  return schema.validate(data);
};
