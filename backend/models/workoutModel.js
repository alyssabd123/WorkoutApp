const mongoose=require('mongoose')

//function to create a new schema

//defines structure of document inside database
//what shoudla typical workout data lookliek
const workoutSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    reps:{
        type: Number,
        required: true,
    },
    load:{
        type: Number,
        required: true,
    },
    //atuomatically says when it was created/updated
}, {timestamps: true});

//workout model to interact with workotu collecttion
module.exports=mongoose.model('Workout', workoutSchema)

//find all workouts in workouts collections
//Workout.find()