const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Book = require('./Booking'); // Import the Booking model
const nodemailer = require('nodemailer');
const CarData = require('./car');
const bikeData = require('./bike');
const destiny = require('./destiny');
const Gears = require('./gears');
const User = require('./userSchema');
const bcrypt = require('bcrypt'); // For password hashing
const jwt = require("jsonwebtoken");
// Create an Express app
const server = express();

// Set up middleware to parse JSON requests
server.use(express.json());
server.use(cors());

mongoose.connect('mongodb://localhost:27017/Tour')
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });


// Route to get all tours
server.get('/api/destinies', async (req, res) => {
  try {
    const tours = await destiny.find({});
    if (!tours) {
      return res.status(404).json({ message: 'Tours not found' });
    }
    res.json(tours);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving tours', error });
  }
});

// Get tour by custom 'id'
server.get('/api/destinies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) {
      return res.status(400).json({ message: 'Invalid tour ID format' });
    }

    const tour = await destiny.findOne({ id: parsedId });
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.json(tour);
  } catch (error) {
    res.status(500).json({ message: 'Server error, unable to fetch tour' });
  }
});


    
//route to find cars
server.get('/api/cars',async(req,res) => {
const cars = await CarData.find({});
res.json(cars);
if(!cars){
res.json({message:"no cars found"});
}
});
//route to find car by id
server.get('/api/cars/:id', async (req, res) => {
  const carId = req.params.id;
  // Validate ObjectId format
  if (!mongoose.Types.ObjectId.isValid(carId)) {
    return res.status(400).json({ message: "Invalid car ID format" });
  }
  try {
    const car = await CarData.findById(carId); 
    
    if (!car) {  // If no car is found with the given ID
      return res.status(404).json({ message: "Car not found" });
    }
    
    res.json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving car" });
  }
});

// route to find bikes
server.get('/api/bikes',async(req,res) => {
  const bikes = await bikeData.find({});
  res.json(bikes);
  if(!bikes){
  res.json({message:"no bikes found"});
  }
  });

// Route to find a bike by ID
server.get('/api/bikes/:id', async (req, res) => {
  const { id } = req.params;

  // Validate ObjectId format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid bike ID format' });
  }

  try {
    const bike = await bikeData.findById(id);  // Find the bike by ID
    if (!bike) {
      return res.status(404).json({ message: "Bike not found" });
    }
    res.json(bike);
  } catch (error) {
    console.error('Error fetching bike:', error);
    res.status(500).json({ message: "Error retrieving bike" });
  }
})
// Route to find  gears
server.get('/api/gears',async(req,res) => {
 
  const CampingGear = await Gears.find({});
  res.json(CampingGear);
  if(!CampingGear){
  res.json({message:"no bikes found"});
  }
  });
// Route to find  gear by id
server.get('/api/gears/:id',async(req,res) => {
  const{id} = req.params.id;
  
  // Validate ObjectId format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid bike ID format' });
  }
  const Gear = await Gears.findById({});
  res.json(Gear);
  if(!Gear){
  res.json({message:"no bikes found"});
  }
  });
// Define the POST route to register a user
server.post('/api/register', async (req, res) => {
  const { name, email, password, termsAccepted } = req.body;

  // Check if all fields are provided
  if (!name || !email || !password || termsAccepted === undefined) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if user already exists
    // Check if user with the same email already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).send('User with this email already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword, termsAccepted });
    await newUser.save();

    // Send success response
    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
server.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if (email === '' || password === '') {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(400).send('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(password, userExists.password);
    if (!isMatch) {
      return res.status(400).send('Invalid email or password');
    }

    res.status(200).json({ message: 'Logged in successfully' });
  } catch (err) {
    console.error('Error logging in user:', err);
    res.status(500).send('Server error');
  }
});

// Set the port to listen on
const PORT = process.env.PORT || 8082;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






