const jwt = require("jsonwebtoken");
const users= [
    {
        email: "user@mail.com",
        password: "123456"
    }
]

const { auth } = require("../config/auth");
const AppError = require("../errors/app-error");
function createToken(userId){

    const token = jwt.sign({userId}, auth.jwt_secret);
    console.log("token",token);
    return token;

}

exports.login = async function(user){
    // check if user is exist
    console.log(user);
    const givenUser = users[0].email.includes(user.email);
    if (!givenUser){
        throw new AppError(404, "User doesnt exist");
    }
    const token = createToken(user);
    return token;
}

exports.register = async function(user){

    // const hasPassword = await bcrypt.hash(user.password, salt);
    
    // add to database
    users.push(user);

    return user;

}