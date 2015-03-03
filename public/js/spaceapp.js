(function () {
  'use strict';

  $(document).ready(function () {
    
    $('.dyn-content').each(function () {
      var identifier = $(this).attr('id');
      var _this = this;
      $.getJSON('/fragment/' + identifier, function (fragment) {
        CKEDITOR.instances[fragment.identifier].setData(fragment.html);
      });
    });

    CKEDITOR.disableAutoInline = true;
    
    $('.dyn-content').each(function (index) {
      $(this).attr('contenteditable', 'true');
      var content_id = $(this).attr('id');
      CKEDITOR.inline(content_id, {
        on: {
          blur: function (event) {
            var data = event.editor.getData();
            $.post('/fragment', { identifier: content_id, html: data });
          }
        }
      });
    });
  });

}).call(this);