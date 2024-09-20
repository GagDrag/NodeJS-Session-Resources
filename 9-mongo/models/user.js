const mongoose = require("mongoose");

// Define User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
