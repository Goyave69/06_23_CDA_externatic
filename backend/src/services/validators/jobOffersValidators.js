const Joi = require("joi");

const validateUser = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationSchema = {
    password: Joi.string().max(255).presence(presence),
    role: Joi.array().presence(presence),
    first_name: Joi.string().max(255).presence(presence),
    last_name: Joi.string().max(255).presence(presence),
    birth_date: Joi.string()
      .regex(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/)
      .presence(presence),
    phone: Joi.number().positive().presence(presence),
    email: Joi.string().email().presence(presence),
    profile_description: Joi.string().max(1000).presence(presence),
    adress: Joi.string().max(255).presence(presence),
    subscription_date: Joi.string()
      .regex(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/)
      .presence(presence),
    status: Joi.number().positive().presence(presence),
  };

  if (forCreation) {
    // Allow empty 'photo_url' when the user is being created
    validationSchema.photo_url = Joi.string()
      .allow("")
      .max(1000)
      .presence(presence);
  } else {
    // 'photo_url' is not required when updating user
    validationSchema.photo_url = Joi.string()
      .max(1000)
      .allow(null)
      .presence(presence);
  }

  return Joi.object(validationSchema).validate(data, { abortEarly: false });
};

module.exports = { validateUser };
