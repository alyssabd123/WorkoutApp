const Workout=require('../models/workoutModel')
const mongoose=require('mongoose')

//get all workout
const getWorkouts=async(req,res)=>{
    //get all the documents, in descending order, newest at top
    const workouts =await Workout.find({}).sort({createdAt:-1})

    res.status(200).json(workouts)
}

//get a single workout
const getWorkout=async(req,res)=>{
    const { id }=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout=await Workout.findById(id)

    if(!workout){
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(workout)

}


//create new workout 
const createWorkout = async (req, res) =>{
    const {title,load,reps}=req.body;

    //add doc to db
    try{ //try to create a new workout
        //pass through new document you want to create
        const workout= await Workout.create({title, load, reps});
        //200 means everythign okay and send back the document
        res.status(200).json({
            message: 'Workout added successfully!',
            workout,
        });
    } catch(error){
        //400 means bad
        res.status(400).json({error: error.message})
    }
}


//delete a workout
const deleteWorkout=async(req,res)=>{
    const { id }=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout=await Workout.findOneAndDelete({_id: id})

    if(!workout){
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(workout)

}

//update a workout
const updateWorkout= async(req,res) =>{
    const { id }=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout=await Workout.findOneAndUpdatae({_id: id}, {
        title: 'abc'
    })
}


module.exports={
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout
}
