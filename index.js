const express = require("express");
const app = express();
const router = require("./controllers/auth");
const db = require("./database/db");

app.use(express.json());
app.use("/auth",router)
db.migrate.latest();

app.listen(2001, ()=> {
    console.log("listening...");
});