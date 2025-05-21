const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the car schema
const carSchema = new Schema({
  name: { type: String, required: true },
  image: {
    type: String,
    required: true,
  },
  rent_per_day: { type: Number, required: true },
  details: {
    model_year: { type: Number, required: true },
    fuel_type: { type: String, required: true },
    transmission: { type: String, required: true },
    color: { type: String, required: true },
    seating_capacity: { type: Number, required: true },
  },
});

// Create the model for the car schema
const Car = mongoose.model('Car', carSchema,'cars');

module.exports = Car;
