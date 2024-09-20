const express = require('express');
const app = express();

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
    res.send('Hello World');           // Send a response to the client
  });
  
  // Start the server, listening on port 3000
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });