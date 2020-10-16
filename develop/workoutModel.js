const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: date,
        trim: true,
        required: "Username is Required"
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "You must provide the type of workout"
        },
        name: {
            type: String,
            trim: true,
            unique: true,
            required: "You must name this workout"
        },
        duration: {
            type: Number,
            required: "Please enter the duration of this workout"
        },
        weight: {
            type: Number,
            required: false
        },
        reps: {
            type: Number,
            required: false,
        },
        sets: {
            type: Number,
            required: false,
        },
        distance: {
            type: Number,
            required: false
        }
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;