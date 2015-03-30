(function(){
  
  'use strict';

  $.getJSON('/blog/latest', function (post) { 
    console.log(post.title);
    $("#latest-blog").html("<h1>"+post.title+"</h1>");
  });
  
}).call(this);