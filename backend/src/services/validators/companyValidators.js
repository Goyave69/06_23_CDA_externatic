/* eslint-disable camelcase */
const Joi = require("joi");

const validateCompany = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  return Joi.object({
    name: Joi.string().max(255).presence(presence),
    adress: Joi.string().max(255).presence(presence),
    phone: Joi.number().positive().presence(presence),
    email: Joi.string().email().presence(presence),
    description: Joi.string().max(255).presence(presence),
    industry_field: Joi.string().max(255).presence(presence),
    photo_url: Joi.string().max(1000).presence(presence),
  }).validate(data, { abortEarly: false });
};

module.exports = { validateCompany };
