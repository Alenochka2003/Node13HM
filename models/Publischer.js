const Publisher = require('./models/Publisher');

const mongoose = require('mongoose');
const publisherSchema = new mongoose.Schema({
  name: String,
  location: String,
});

const Publisher = mongoose.model('Publisher', publisherSchema);
module.exports = Publisher;
