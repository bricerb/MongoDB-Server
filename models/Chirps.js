// Mongoose Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Connect to MongoDB
let url = process.env.MONGOLAB_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/chirps';
mongoose.Promise = require('bluebird');
mongoose.connect(url);

// Chirp Model
const ChirpSchema = new Schema({
    title: {type: String},
    post: {type: String},
    comment: {type: [String]},
    author: String,
});

const Chirp = mongoose.model("Chirp", ChirpSchema);

module.exports = Chirp;
