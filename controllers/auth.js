const { AppError } = require("../errors/app-error");
const {login,register} = require("../services/auth");
const { tryCatch } = require("../utils/tryCatch");

exports.signInController = tryCatch(async function(req, res){
    const token = await login(req.body);
    if(!token){
        throw AppError(400, "Token doesnt exist.")
    }
    res.status(200).json("success");
});

exports.registerController = tryCatch(async function(req, res){
    const user = await register(req.body);
    if(!user){
        throw AppError(404, "User doesnt exist");
    }
    res.status(200).json("success");
});

exports.getPostController = tryCatch(async function(req, res){
    const post = await getPost(req.body.id);

    if (!post){
        throw AppError(404, "Post doesnt exist.");
    } 
    res.status(200).json("success");
});