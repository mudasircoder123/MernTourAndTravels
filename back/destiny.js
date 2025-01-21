const mongoose = require('mongoose');

// Define the schema for Kashmir Destinations
const destinationSchema = new mongoose.Schema({
  id: { type: Number, required: true },          // Unique identifier for the destination
  title: { type: String, required: true },       // Name of the destination
  description: { type: String, required: true }, // Detailed description of the destination
  imageUrl: { type: String, required: false },   // URL of an image related to the destination (optional)
  bookingLink: { type: String, required: false },// URL link for booking (optional)
  pricePerDayPerAdult: { type: Number, required: true }, // Price per day per adult for the travel package
  category: { type: String, required: true },    // Category like Lake, Mountain, Trekking, Historical Place
  itinerary: [{
    day: { type: Number, required: true },        // Day number in the itinerary
    description: { type: String, required: true }, // Activity or description of what to do on that day
  }],
});

// Create a model for the destinations using the schema
const Destination = mongoose.model('Destination', destinationSchema, 'destinations');

module.exports = Destination;