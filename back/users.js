const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userModel = require('./userModel');  // Make sure this path is correct
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
// Middleware setup
app.use(cors());  // Enable CORS to allow cross-origin requests
app.use(cookieParser());  // Parse cookies if necessary
app.use(express.json());  // Middleware to parse JSON request bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/users')  // Replace with your MongoDB connection string
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Define the POST route for user registration
app.post('/api/users', async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user instance and save it to the database
  const newUser = new userModel({ name, email, password: hashedPassword });
  await newUser.save();
 const token = jwt.sign({ email},"hmmm" );
 res.cookie
  // Respond with success message
  res.status(201).json({ message: 'User registered successfully' });
});

// Set the port to listen on
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

