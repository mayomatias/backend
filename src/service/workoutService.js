//Services se conecta con la base de datos.
// Los datos vienen del controller
//        
//                Arquitectura de 3 capas
// -------------------------DATA---------------------->  
//  Controller      Service       Workout         DB 
//                                 Utils
//
const Workout = require("../database/Workout")
const { v4: uuid } = require("uuid");

const getAllWorkouts = () => {
  try {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
  } catch (error) {
    throw error;
  }
  };
  
  const getOneWorkout = (workoutId) => {
    try {
      const workout = Workout.getOneWorkout(workoutId);
      return workout;
    } catch (error) {
      throw error;
    }
  };
  
  const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
      ...newWorkout,
      id: uuid(),
      createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    }
    try {
      const createdWorkout = Workout.createNewWorkout(workoutToInsert);
      return createdWorkout;
    } catch (error) {
      throw error;
    }
    
  };
  
  const updateOneWorkout = (workoutId, changes) => {
    try {
      const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
      return updatedWorkout;
    } catch (error) {
      throw error;
    }
  };
  
  const deleteOneWorkout = () => {
    try {
      Workout.deleteOneWorkout(workoutId);
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };