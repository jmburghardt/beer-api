const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrewerySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    favorite: {
        type: Boolean
    }
 })

 module.exports = mongoose.model('Brewery', BrewerySchema);