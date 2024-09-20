const express = require('express');
const app = express();

// Home route (GET request)
app.get('/', (req, res) => {
  res.send('Hello from the Home Page');
});

// About route (GET request)
app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

// Contact route (POST request)
app.post('/contact', (req, res) => {
  res.send('Contact form submitted!');
});

// Start server on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Dynamic route to greet a user by name
app.get('/greet/:name', (req, res) => {
    const userName = req.params.name;  // Capture the parameter 'name' from the URL
    res.send(`Hello, ${userName}!`);   // Respond with a personalized greeting
  });