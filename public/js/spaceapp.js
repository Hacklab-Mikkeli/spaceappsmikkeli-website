(function () {
  'use strict';

  $(document).ready(function () {
    
    $('.dyn-content').each(function () {
      var identifier = $(this).attr('id');
      var _this = this;
      $.getJSON('/fragment/' + identifier, function (fragment) {
        $(_this).html(fragment.html);
      });
    });
  });

}).call(this);