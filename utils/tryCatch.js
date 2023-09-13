exports.tryCatch = (controller) => async function(req, res, next){
    try {
        await controller(req, res, next);
    } catch (error) {
        console.log(error);
        return next(error);
    }
}