const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "You must provide the type of exercise"
        },
        name: {
            type: String,
            trim: true,
            unique: true,
            required: "You must name this exercise"
        },
        duration: {
            type: Number,
            required: "Please enter the duration of this exercise"
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

ExerciseSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const exerciseModel = mongoose.model("Exercise", ExerciseSchema);

module.exports = exerciseModel;