

exports.validateBody = function(schema){
        return  (req, res, next) => {
            const {error, value} = schema.validate(req.body);
            if(error) {
                return res.status(400).json({
                    success: false,
                    message: error.message,
                })
            }
            req.body = value;
            next();
        }
}