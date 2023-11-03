const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  try {
    return DB.workouts;
  } catch (error) {
    throw { status: 500, message: error };
  }

};

const getOneWorkout = (workoutId) => {
  try {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if (!workout) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    return workout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
}

const createNewWorkout = (newWorkOut) => {
  const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkOut.name) > -1;
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: "Workout already exists"
    }
  }
  try {
    DB.workouts.push(newWorkOut);
    saveToDatabase(DB);
    return newWorkOut;
  } 
  catch (error) {
    throw { status: 500, message: error?.message || error };
  }
}

const updateOneWorkout = (workoutId, changes) => {
  try {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === changes.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Workout with the name '${changes.name}' already exists`,
      };
    }
    const indexForUpdate = DB.workouts.findIndex(
      (workout) => workout.id === workoutId
    );
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    const updatedWorkout = {
      ...DB.workouts[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    DB.workouts[indexForUpdate] = updatedWorkout;
    saveToDatabase(DB);
    return updatedWorkout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
}

module.exports = { 
  getAllWorkouts,
  createNewWorkout,
  getOneWorkout,
  updateOneWorkout
 };