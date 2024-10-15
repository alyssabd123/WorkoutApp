const express = require('express')

const {
    getWorkouts,
    getWorkout,
    createWorkout,
} = require('../controllers/workoutController')

const Workout=require('../models/workoutModel')
const router = express.Router()

//Get all workouts
router.get('/', getWorkouts)

//Get single workout
router.get('/:id',getWorkout)

router.post('/', createWorkout)

router.delete('/:id', (req,res) =>{
    res.json({mssg: "DELETE workout"})
})

router.patch('/:id', (req,res) =>{
    res.json({mssg: "UPDATE workout"})
})

module.exports = router