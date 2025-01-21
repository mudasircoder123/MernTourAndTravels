const mongoose = require('mongoose');

const campingGearSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Tent', 'Sleeping Bag', 'Stove', 'Backpack', 'Furniture', 'Lighting', 'Trekking Gear', 'Water Gear', 'Footwear'], // Limit categories to known values
  },
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  features: [{
    type: String,
  }],
  image: {
    type: String,
    required: true,
  },
});

const CampingGear = mongoose.model('CampingGear', campingGearSchema, 'gears');

module.exports = CampingGear;
