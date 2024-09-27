const Magazine = require('./models/Magazine');
const mongoose = require('mongoose');
const magazineSchema = new mongoose.Schema({
  title: String,
  issueNumber: Number,
  publisher: { type: mongoose.Schema.Types.ObjectId, ref: 'Publisher' },
});

const Magazine = mongoose.model('Magazine', magazineSchema);
module.exports = Magazine;
