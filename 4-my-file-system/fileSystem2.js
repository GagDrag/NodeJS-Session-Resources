const fs = require('fs');  // Import the 'fs' module

// Write to a new file asynchronously
fs.writeFile('output.txt', 'Hello, this is written by Node.js!', (err) => {
  if (err) {
    throw err;  // If there's an error, throw it
  }
  console.log('File has been written successfully!');
});
