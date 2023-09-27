const express = require("express");
const router = express.Router();
const workoutController = require("../../controller/workoutController.js")

router.get("/", (workoutController.getAllWorkouts))

router.get("/:workoutId", (workoutController.getOneWorkout));

router.post("/", (workoutController.createNewWorkout));

router.patch("/:workoutId", (workoutController.updateOneWorkout));

router.delete("/:workoutId", (workoutController.deleteOneWorkout));

module.exports = router;