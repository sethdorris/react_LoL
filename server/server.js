const express = require("express")
const bodyParser = require('body-parser')
const path = require("path")
const StatsController = require("./controllers/StatsController");
const app = express()


app.use(bodyParser.json())

app.use('/static', express.static(path.join(__dirname, '../img')))
app.use(express.static(path.join(__dirname, "../build")))

app.get("/", (req, res, next) => {
    console.log(path.join(__dirname, "../build", "index.html"));
    return res.sendFile(path.join(__dirname, "../build", "index.html"))
})

app.get("/GetStats", StatsController.GetStats)

/** start server */
app.listen(process.env.PORT, '0.0.0.0');