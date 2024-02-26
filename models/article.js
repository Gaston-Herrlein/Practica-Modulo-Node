/* eslint-disable linebreak-style */

const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  name: { type: String, require: true, index: true },
  sale: { type: Boolean, require: true },
  price: { type: Number },
  photo: { type: String },
  tag: { type: [String] }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
