const express = require("express");
const app = express();

// A simple middleware function
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Call the next middleware or route handler
};

// Use the logger middleware for every request
app.use(logger);

// Route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

// A route that might cause an error
app.get("/error", (req, res, next) => {
  const error = new Error("Something went wrong!");
  next(error); // Forward the error to the error handler
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.message); // Log the error
  res.status(500).send("Internal Server Error"); // Send a generic response
});

// app.use((req, res, next) => {
//   const error = new Error('Not Found');
//   error.status = 404;
//   next(error);  // Forward the error to the next middleware
// });
