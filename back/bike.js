const mongoose = require('mongoose');
const { Schema } = mongoose;

// Defining the bike rental schema without validation rules
const bikeSchema = new Schema({
id: Number,
  name: {
    type: String,
    required: true // The bike's name is required
  },
  img: {
    type: String,
    required: true // Image path or URL is required
  },
  rent_per_day: {
    type: Number,
    required: true // Rent per day is required
  },
  description: {
    type: String,
    required: true // Description of the bike is required
  },
  details: {
    model_year: {
      type: Number,
      required: true // Model year is required
    },
    fuel_type: {
      type: String,
      required: true // Fuel type is required
    },
    transmission: {
      type: String,
      required: true // Transmission type is required
    },
    color: {
      type: String,
      required: true // Color is required
    },
    seating_capacity: {
      type: Number,
      required: true // Seating capacity is required
    }
  }
});

// Create a Mongoose model based on the schema
const Bike = mongoose.model('Bike', bikeSchema,'Bike');

module.exports = Bike;

  

  