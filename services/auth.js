const jwt = require("jsonwebtoken");
const users= [
    {
        email: "user@mail.com",
        password: "123456"
    }
]

const { auth } = require("../config/auth");
function createToken(userId){

    const token = jwt.sign({userId}, auth.jwt_secret);
    console.log("token",token);
    return token;

}

exports.login = async function(user){
    // check if user is exist
    const givenUser = users.includes(user);
    if (givenUser){
        // compare passwords
        const token = createToken(user.id);
        return token;

    }

    return null;

}

exports.register = async function(user){

    // const hasPassword = await bcrypt.hash(user.password, salt);
    
    // add to database
    users.push(user);

    return user;

}