var Blog = require('../model/blog');

function getIdentifier(title){
  
};


exports.create = function(title, content){
  var blog = new Blog();
  blog.title = title;
  blog.content = content;
  blog.created = new Date().getTime();
  blog.identifier = getIdentifier(title);
};