

exports.validateBody = function(schema){
        return  (req, res, next) => {
    
            const {error, value} = schema.validate(req.body);
            if(error) {
                const response = buildResponse({
                    success: false,
                    message: error.message,
                });
                return res.status(400).json(response)
            }
            req.body = value;
            next();
        }
}