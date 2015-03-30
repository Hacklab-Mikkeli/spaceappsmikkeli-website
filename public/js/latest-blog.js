(function(){
  
  'use strict';

  $.getJSON('/blog/latest', function (post) { 
    console.log(post.title);
  });
  
}).call(this);