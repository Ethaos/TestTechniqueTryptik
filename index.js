import express from "express";
import bodyParser from "body-parser";
import todosRouter from "./routes/todos.js"
const app = express();

app.use(bodyParser.json())

app.use('/api/v1', todosRouter);


app.listen(3000, function () {
    console.log("Hey server is running on port 3000")
})
