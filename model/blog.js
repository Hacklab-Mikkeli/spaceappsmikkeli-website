var mongoose = require('mongoose');

var Blog = mongoose.model('Blog', {
  title: String,
  content: String,
  identifier: String,
  created: Number,
  archieved: Boolean
});

module.exports = Blog;