const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for the user registration data
const userSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, 'Full name is required'],
        minlength: [3, 'Full name should be at least 3 characters'],
        maxlength: [100, 'Full name should be less than 100 characters'],
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true, // Ensure email is unique
        match: [
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
          'Please provide a valid email address',
        ],
      },
      password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password should be at least 6 characters'],
      },
      termsAccepted: {
        type: Boolean,
        required: [true, 'You must accept the terms and conditions'],
      },
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
  );
  
  // Create and export the User model based on the schema
  const User = mongoose.model('User', userSchema,'users');
  
  module.exports = User;