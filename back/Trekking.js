const mongoose = require('mongoose');
const { Schema } = mongoose;

const trekSchema = new Schema({
  id: {
    type: Number,  // Unique identifier for the trek
    required: true,
    unique: true
  },
  name: {
    type: String,  // Name of the trek
    required: true
  },
  itinerary: [
    {
      type: String,  // Description of each day's trek
      required: true
    }
  ],
  price: {
    type: Number,  // Price for the trek in INR
    required: true
  },
  description: {
    type: String,  // A brief summary of the trek
    required: true
  }
}, {
  timestamps: true  // Adds createdAt and updatedAt fields
});

const Trek = mongoose.model('Trek', trekSchema,'Trekking');

module.exports = Trek;
