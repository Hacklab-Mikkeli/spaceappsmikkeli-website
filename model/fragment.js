var mongoose = require('mongoose');

var Fragment = mongoose.model('Fragment', {
  html: String,
  identifier: String
});

module.exports = Fragment;