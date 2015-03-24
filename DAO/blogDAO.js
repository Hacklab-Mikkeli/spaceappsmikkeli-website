var Blog = require('../model/blog');

function getIdentifier(title){
  return encodeURIComponent(title.replace(' ', '-').replace('ä', 'a').replace('ö', 'o'));
};

exports.create = function(title, content, callback){
  var blog = new Blog();
  blog.title = title;
  blog.content = content;
  blog.created = new Date().getTime();
  blog.identifier = getIdentifier(title);
  blog.save(function(err, blog){
    if(err) throw err;
    callback(blog);
  });
};

exports.list = function(callback){
  Blog.find({}).sort({'created': 'desc'}).exec(function(blogs){
    callback(blogs);
  });
};

exports.findByIdentifier = function(identifier, callback){
  Blog.findOne({identifier: identifier}, function(err, blog){
    if(err) throw err;
    callback(blog);
  });
};