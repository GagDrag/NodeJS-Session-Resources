const fs = require('fs');  // Import the 'fs' module

// Read the file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    // If there's an error (e.g., file not found), throw the error
    throw err;
  }
  // If no error, log the content of the file
  console.log(data);
});
