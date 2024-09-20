const express = require('express');
const app = express();

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('http://localhost:3000')
});
