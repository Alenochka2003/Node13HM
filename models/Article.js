const Article = require('./models/Article');
const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
});

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
