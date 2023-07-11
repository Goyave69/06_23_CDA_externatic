/* eslint-disable camelcase */
const Joi = require("joi");

const validateJobApplications = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  return Joi.object({
    status: Joi.number().positive().presence(presence),
    is_favorite: Joi.boolean().presence(presence),
    date: Joi.string()
      .regex(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/)
      .presence(presence),
    job_offers_id: Joi.number().positive().presence(presence),
    candidate_id: Joi.number().positive().presence(presence),
  }).validate(data, { abortEarly: false });
};

module.exports = { validateJobApplications };
