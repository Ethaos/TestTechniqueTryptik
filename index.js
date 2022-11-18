import express from "express";

const app = express();

app.get('/', function(req, res) {
    res.json({
        name: "jhon",
        age: 20
    });
});

app.listen(3000, function () {
    console.log("Hey server is running on port 3000")
})
