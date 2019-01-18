﻿const express = require("express")
const bodyParser = require('body-parser')
const path = require("path")
const StatsController = require("./controllers/StatsController");
const app = express()

let port = 5000 || process.env.PORT


app.use(bodyParser.json())

app.use('/static', express.static(path.join(__dirname, '../img')))
app.use(express.static(path.join(__dirname, "../build")))

app.get("/", (req, res, next) => {
    console.log(path.join(__dirname, "../build", "index.html"));
    return res.sendFile(path.join(__dirname, "../build", "index.html"))
})

app.get("/GetStats", StatsController.GetStats)

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});