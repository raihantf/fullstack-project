const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
var routes = require('./routes/routes')
const cors = require('cors')
app.use(cors(
    {
        origin: "http://localhost:8080"
    }
))
app.listen(3000, function check(error){
    if (error) {
        console.log("Error!!!")
    } else {
        console.log("Started...!!!")
    }
})

mongoose.connect("mongodb://localhost:27017/test-fullstack", {useNewUrlParser: true, useUnifiedTopology: true},
    function checkDb(error){
        if (error){
            console.log("error connecting to DB")
        } else {
            console.log("Sucessfully connected to DB")
        }
    }
)

app.use(express.json())
app.use(routes)