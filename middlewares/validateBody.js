const AppError = require("../errors/app-error");
const { tryCatch } = require("../utils/tryCatch");


exports.validateBody = function(schema){
        return tryCatch(async (req, res, next) => {
            const {error, value} = await schema.validate(req.body);
            if(error) {
                throw new AppError(400, error.messge);
            }
            next();
        });
}