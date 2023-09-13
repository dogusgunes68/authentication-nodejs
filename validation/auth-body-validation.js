const joi = require("joi");

exports.authValidation = joi.object({
    email: joi.string().required().email(),
    password: joi.string().min(6).max(50).required(),
});

