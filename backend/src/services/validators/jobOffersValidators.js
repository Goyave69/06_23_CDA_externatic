/* eslint-disable camelcase */
const Joi = require("joi");

const validateJobOffer = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  return Joi.object({
    name: Joi.string().max(255).presence(presence),
    location: Joi.string().max(255).presence(presence),
    job_description: Joi.string().max(1000).presence(presence),
    status: Joi.number().positive().presence(presence),
    edition_date: Joi.string()
      .regex(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/)
      .presence(presence),
    contract_type: Joi.string().max(255).presence(presence),
    salary_min: Joi.number().positive().presence(presence),
    salary_max: Joi.number().positive().presence(presence),
    headhunter_id: Joi.number().positive().presence(presence),
  }).validate(data, { abortEarly: false });
};

module.exports = { validateJobOffer };
