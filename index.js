require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI)
    .then(() => { 
        console.log("Database Connected")
    })
    .catch((err) => {
        console.log("Error connecting to Database: ", err)
    })

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "API is working" })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`)
})