const {login,register} = require("../services/auth");

exports.signInController = async function(req, res){
    try {
        const token = await login(req.body);
        if(token){
            res.status(200).json("success")
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.registerController = async function(req, res){
    try {
        const user = await register(req.body);
        if(user){
            res.status(200).json("success");
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}