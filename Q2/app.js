require('dotenv').config()

const path = require('path')
const express = require('express')
const app = express()
require("./db")



app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)


app.listen(8000, ()=>{
    console.log("Server Started")
})

module.exports = app;
