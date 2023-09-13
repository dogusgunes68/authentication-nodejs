const yup = require("yup");

exports.authValidation = yup.object({
    email: yup.string().required().email(),
    password: yup.string().min(6).max(50).required(),
});

