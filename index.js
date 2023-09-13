

const { createServer } = require("./server");
const app = createServer();
app.listen(2001, ()=> {
    console.log("listening...");
});