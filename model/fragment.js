var mongoose = require('mongoose');

var Fragment = mongoose.model('Fragment', {
  html: String,
  identifier: String,
  revision: Number
});

module.exports = Fragment;