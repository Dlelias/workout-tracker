const router = require("express").Router();
// import model
const Workout = require("../models/workout.js");

// get last workout

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// add exercise

router.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log("check!", body, params);
  Workout.findByIdAndUpdate(
      { _id: params.id },
      { $push: { exercises: body } },
      { new: true }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).res.json(err);
      });
});

// create new work out
router.post("/api/workouts", ({ body }, res) => {
  console.log(" ✔ ");
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).res.json(err);
    });
});

// get 7 day workout
router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    }]).sort({ _id: -1 }).limit(7)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      })
});
// export API routs 
module.exports = router;