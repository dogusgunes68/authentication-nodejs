const express = require("express");
const app = express();
const router = require("./routes/auth");
const db = require("./database/db");

app.use(express.json());
app.use("/auth",router);

const migration = async () =>{
    try {
        await db.migrate.latest();
    } catch (error) {
        console.log(error);
    }
}

migration();


app.listen(2001, ()=> {
    console.log("listening...");
});