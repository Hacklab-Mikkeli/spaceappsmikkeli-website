(function(){
  
  'use strict';

  $.getJSON('/blog/latest', function (post) { 
    $("#latest-blog").html("<h1>"+post.title+"</h1>"+post.content);
  });
  
}).call(this);