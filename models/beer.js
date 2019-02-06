const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: [0, "Rating must be a number from 0-10"],
    max: [10, "Rating must be a number between 0-10"],
    required: true
  }
});


module.exports = mongoose.model('Beer', BeerSchema);