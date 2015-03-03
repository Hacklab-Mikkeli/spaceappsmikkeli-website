(function () {
  'use strict';
  $.getJSON('/user/list', function (users) { 
    for (var i = 0, j = users.length; i < j; i++) {
      var user = users[i];
      $('.user-list').append('<li>' + user.email + '</li>');
    }
  });

  $('#add-new-user-btn').click(function () {
    var email = $('#new-user-email').val();
    if (typeof (email) !== 'undefined' && email !== '') {
      $.post('/user/new', { email : email }, function (user) { 
        $('.user-list').append('<li>'+user.email+'</li>');
      });
    }
  });
}).call(this);