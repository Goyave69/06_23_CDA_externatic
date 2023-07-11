/* eslint-disable camelcase */
const Joi = require("joi");

const validateHeadhunter = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  return Joi.object({
    skills_area: Joi.string().max(255).presence(presence),
    research_sector: Joi.string().max(255).presence(presence),
    is_admin: Joi.boolean().presence(presence),
    user_id: Joi.number().positive().presence(presence),
  }).validate(data, { abortEarly: false });
};

module.exports = { validateHeadhunter };
