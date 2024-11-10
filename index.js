require("dotenv").config()
const express = require("express")
const app = express()
const path = require("path")

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
    res.render("home")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`)
})