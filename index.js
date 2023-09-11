const express = require("express");
const app = express();
const authRoute = require("./controllers/auth");
const db = require("./database/db");

app.use(express.json());
app.use("/auth",authRoute)
db.migrate.latest();

app.listen(2001, ()=> {
    console.log("listening...");
});