require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const workoutRoutes=require('./routes/workouts')


const app=express()

//Middleware to parse incoming JSON requests
app.use(express.json())


app.use((req,res,next) =>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/workout', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => { //after connected to database
        //listen to requests, once connected to db
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port 4000')
        })
    })
    .catch((error) =>{
        console.log(error)
    })








