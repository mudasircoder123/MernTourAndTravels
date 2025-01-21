const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,  // Changed to String
});

module.exports = mongoose.model("User", userSchema,"details");
