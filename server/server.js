const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// API routes
app.get("/api/tasks", (req, res) => {
  // Return a list of tasks from the database
});

app.post("/api/tasks", (req, res) => {
  // Add a new task to the database
});

app.put("/api/tasks/:id", (req, res) => {
  // Update a task in the database
});

app.delete("/api/tasks/:id", (req, res) => {
  // Delete a task from the database
});

// Catch all other routes and return the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(4001, () => {
  console.log('Server listening on port 4001');
});

