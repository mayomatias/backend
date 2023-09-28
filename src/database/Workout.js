const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

const createNewWorkout = (newWorkOut) => {
  const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkOut.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.workouts.push(newWorkOut);
  saveToDatabase(DB);
  return newWorkOut
}

module.exports = { 
  getAllWorkouts,
  createNewWorkout
 };