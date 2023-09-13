const express = require("express");
const app = express();
const router = require("./routes/auth");
const db = require("./database/db");
const errorHandler = require("./errors/error-handler");

app.use(express.json());


app.use("/auth",router);



app.use(errorHandler);
app.listen(2001, ()=> {
    console.log("listening...");
});