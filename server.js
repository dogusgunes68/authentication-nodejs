const express = require("express");
const app = express();
const router = require("./routes/auth");
const errorHandler = require("./errors/error-handler");
exports.createServer = function(){

app.use(express.json());


app.use("/auth",router);

app.use(errorHandler);
return app;
}