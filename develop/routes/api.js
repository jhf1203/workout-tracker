const router = require("express").Router();
const Workout = require("../models/exerciseModel");

router.post("/api/workouts", (req, res) => {
// 200 code received on this, but both req.body and req.params are empty?
  console.log("req body is here", req.body)
  console.log("req.params is here", req.params)
  Workout.create({ exercises: []
   })
  .then(dbWorkout => {
      res.json(dbWorkout)
      console.log("dbworkout is here", dbWorkout);
  })
  .catch((err) => {
      res.json(err);
      console.log("errorerrerr", err);
  })
});

// 200 response received on request, but does not update in api/workouts.
// Console appears to try to PUT on api/workouts/undefined.  It is not generating an id from the POST request despite POST returing 200 status.
router.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log(body);
  console.log(params);
  // console.log(res)
  Workout.findByIdAndUpdate(
    {id:  params.id},
    {exercises: [{
      type: body.type,
      name:  body.name,
      duration: body.duration,
      weight:  body.weight,
      reps:  body.reps,
      sets:  body.sets,
      distance:  body.distance
    }]
    }
  )
  .then(res => {
    console.log("result", res)
  })
  .catch((err) => {
    res.json(err);
})
});

// This is functional
router.get("/api/workouts", (req, res) => {
  Workout.find()
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(7);
});

router.delete("/api/workouts", ({ body }, res) => {
  Workout.findByIdAndDelete({ _id: body.id })
  .then(res => {
      console.log(res)
  })
  .catch(err => {
      console.log(err)
  });
});

module.exports = router;