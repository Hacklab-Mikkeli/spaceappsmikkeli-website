var blogDAO = require('../../DAO/blogDAO');

var WORD_COUNT = 50;

function strip(text){
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
    res.render('blogpost', {user: req.user, menu: 'blog', posts: posts});
  });
};