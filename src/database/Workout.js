const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

const getOneWorkout = (workoutId) => {
  const workout = DB.workouts.find((workout) => workout.id === workoutId)
  if(!workout){
    return
  }
  return workout;
}

const createNewWorkout = (newWorkOut) => {
  const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkOut.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.workouts.push(newWorkOut);
  saveToDatabase(DB);
  return newWorkOut
}

const updateOneWorkout = (workoutId, body) => {
  const indexForUpdate = DB.workouts.findIndex((workout) => workout.id == workoutId);
  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    ...body,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  DB.workouts[indexForUpdate] = updatedWorkout;
  saveToDatabase(DB);
  return updatedWorkout
}

module.exports = { 
  getAllWorkouts,
  createNewWorkout,
  getOneWorkout,
  updateOneWorkout
 };