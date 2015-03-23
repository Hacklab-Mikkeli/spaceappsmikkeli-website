var mongoose = require('mongoose');

var Blog = mongoose.model('Blog', {
  title: String,
  content: String,
  identifier: String,
  created: Number
});

module.exports = Blog;