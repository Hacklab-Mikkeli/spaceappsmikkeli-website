var blogDAO = require('../../DAO/blogDAO');

var WORD_COUNT = 50;

function strip(html){
  var text = html.replace(/<\/?[^>]+(>|$)/g, "");
  var words = text.split(' ');
  if (words.length < WORD_COUNT) {
    return text;
  } else {
    text = "";
    for (var i = 0; i < WORD_COUNT; i++) {
      text += ' ' + words[i];
    }
    return text + '...';
  }
}

exports.index = function(req, res){
  blogDAO.list(function(posts){
    for(var i = 0, j = posts.length; i < j;i++){
      posts[i].content = strip(posts[i].content);
    }
    res.render('blog', {user: req.user, menu: 'blog', posts: posts});
  });
};

exports.blogPost = function(req, res){
  var postId = req.param('identifier');
  blogDAO.findByIdentifier(postId, function(post){
    res.render('blogpost', {user: req.user, menu: 'blog', post: post});
  });
};

exports.create = function(req, res){
  var title = req.body.blog_title;
  var content = req.body.blog_content;
  var identifier = req.body.blog_id;
  blogDAO.create(identifier, title, content, function(post){
    res.send(post);
  });
};

exports.update = function(req, res){
  var title = req.body.blog_title;
  var content = req.body.blog_content;
  var identifier = req.param('identifier');
  var created = parseInt(req.body.blog_created,10);
  blogDAO.update(identifier, title, content, created, function(post){
    res.send(post);
  });
};
