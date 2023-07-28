const Joi = require("joi");

const validateCandidate = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  return Joi.object({
    profession: Joi.string().max(255).presence(presence),
    researched_job: Joi.string().max(255).presence(presence),
    job_search_location: Joi.string().max(255).presence(presence),
    availability_date: Joi.string()
      .regex(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/)
      .presence(presence),
    skills: Joi.string().max(255).presence(presence),
    languages: Joi.string().max(255).presence(presence),
    cv_url: Joi.string().max(1000).presence(presence),
    motivation_letter_url: Joi.string().max(1000).presence(presence),
    user_id: Joi.number().positive().presence(presence),
  }).validate(data, { abortEarly: false });
};

module.exports = { validateCandidate };
