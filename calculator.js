const express = require("express")

const app = express()

app.get("/", function (req, res) {
    res.send("Calculadora")
})

app.listen(80, function () {
    console.log("Server started on port 80")
})