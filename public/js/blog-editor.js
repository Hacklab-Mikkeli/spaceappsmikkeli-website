(function(){
	'use strict';
	
	$(document).ready(function(){
		$('.blog-field').each(function(){
			  $(this).attr('contenteditable', 'true');
		      var content_id = $(this).attr('id');
		      CKEDITOR.inline(content_id);		
		});
		
		$('#update-blog-post').click(function(){
			var created = $('#blog-post-created').val();
			var identifier = $('#blog-post-identifier').val();
			var title = $('#blog-post-title').html();
			var content = $('#blog-post-content').html();
			$.post('/blog/post/'+identifier+'/update', { 
				'blog_title': title,
				'blog_content': content,
				'blog_created': created
				}, function(post){
				var success = $('<span/>');
				success.text('Saved!');
				$('#update-blog-post').after(success);
				setTimeout(function(){
					success.remove();
				}, 3000);
					
			});
		});
		
	});
})();