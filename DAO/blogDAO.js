var Blog = require('../model/blog');

function archieveOld(_id, identifier){
	Blog.find({identifier: identifier}, function(err, blogs){
		for(var i = 0, j = blogs.length;i < j; i++){
			var blog = blogs[i];
			if(!blog._id.equals(_id)){
				blog.archieved = true;
				blog.save(function(err){
					if(err) throw err;
				});
			}
		}
	});
}

exports.create = function(identifier, title, content, callback){
  var blog = new Blog();
  blog.title = title;
  blog.content = content;
  blog.created = new Date().getTime();
  blog.identifier = identifier;
  blog.archieved = false;
  blog.save(function(err, blog){
    if(err) throw err;
    archieveOld(blog._id, identifier);
    callback(blog);
  });
};

exports.update = function(identifier, title, content, created, callback){
  var blog = new Blog();
  blog.title = title;
  blog.content = content;
  blog.created = created;
  blog.identifier = identifier;
  blog.archieved = false;
  blog.save(function(err, blog){
    if(err) throw err;
    archieveOld(blog._id, identifier);
    callback(blog);
  });
};

exports.list = function(callback){
  Blog.find({archieved: false}).sort({'created': 'desc'}).exec(function(err, blogs){
	if(err) throw err;
    callback(blogs);
  });
};

exports.findByIdentifier = function(identifier, callback){
  Blog.findOne({identifier: identifier, archieved: false}, function(err, blog){
    if(err) throw err;
    callback(blog);
  });
};