const {auth} = require("../config/auth");

exports.requireAdmin = function(req, res, next){

    let token = req.headers("Authorization");

    if (!token) return res.status(403).json("Access Denied");

    if(token.startsWith("Bearer ")){
        token = token.slice(7, token.length).trim();
    }
    // const verified = jwt.verify(token, auth.jwt_secret);
    // if(!verified){
    //     return res.status(401).json({
    //         success: false,
    //         message: "Token is not valid"
    //     });
    // }
        
    next();        
}