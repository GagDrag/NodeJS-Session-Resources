// A middleware to log every request
app.use((req, res, next) => {
  console.log(`Request to ${req.url}`);
  next(); // Proceed to the next middleware or route handler
});

// Middleware to check user authentication
app.use((req, res, next) => {
  const authenticated = true; // Imagine a check here
  if (authenticated) {
    next(); // User is authenticated, proceed
  } else {
    res.status(403).send("Forbidden");
  }
});

// Route that will only be hit if user is authenticated
app.get("/dashboard", (req, res) => {
  res.send("Welcome to your dashboard!");
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
