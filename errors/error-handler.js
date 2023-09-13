const AppError = require("./app-error");
function errorHandler(error, req, res, next){

    if (error.name === "ValidationError"){
        return res.status(400).json({
            type: error.name,
            message: error.message
        });
    }

    if (error instanceof AppError){
        return res.status(error.statusCode).json({
            type: error.name,
            message: error.message,
        });
    }

    return res.status(500).json("Internal Server Errorrr");
}

module.exports = errorHandler;