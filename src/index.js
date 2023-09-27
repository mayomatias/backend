// In src/index.js 
const express = require("express"); 
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const bodyParser = require("body-parser");

const app = express(); 
const PORT = process.env.PORT || 3000; 

// For testing purposes 
/* app.get("/", (req, res) => { 
    res.send("<h2>It's Working!</h2>"); 
}); 
 */
app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => { 
    console.log(`🚀🚀API is listening on port ${PORT}`); 
});