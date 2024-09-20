const express = require('express');
const app = express();

// A simple middleware function
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();  // Call the next middleware or route handler
};

// Use the logger middleware for every request
app.use(logger);

// Route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


//app.use(express.json());  // Middleware to parse JSON data
//app.use(express.static('public'));
