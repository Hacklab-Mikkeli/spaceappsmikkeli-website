(function(){
	'use strict';
	$(document).ready(function(){
		$('.blog-field').each(function(){
		  $(this).attr('contenteditable', 'true');
	      var content_id = $(this).attr('id');
	      CKEDITOR.inline(content_id);		
		});
		$('#create-blog-post').click(function(){
			var title = $('#new-post-title').html();
			var content = $('#new-post-body').html();
			console.log('title:'+title);
			console.log('content:'+content);
		});
		
	});
})();