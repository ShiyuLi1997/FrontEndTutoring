const mongoose = require('mongoose')
const uri = "";

mongoose.connect(
    process.env.DATABASE_URL,
    (error,client)=>{
        if(error){
            return console.log(error)
        }
        console.log('Connected to Database')
    })
// const db = mongoose.connection