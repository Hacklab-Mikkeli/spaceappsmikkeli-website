(function(){
	
	'use strict';
	
	function getIdentifier(title){
		return title.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
	};
	
	$(document).ready(function(){
		$('.blog-field').each(function(){
		  $(this).attr('contenteditable', 'true');
	      var content_id = $(this).attr('id');
	      CKEDITOR.inline(content_id);		
		});

		$('#create-blog-post').click(function(){
			var title = $('#new-post-title').html();
			var content = $('#new-post-body').html();
			var identifier = getIdentifier($('#new-post-title').text());
			$.post('/blog/new/post', {
				'blog_title': title,
				'blog_content': content,
				'blog_id': identifier
			}, function(post){
				window.location.replace('/blog/post/'+post.identifier);
			});
		});
		
	});
})();
