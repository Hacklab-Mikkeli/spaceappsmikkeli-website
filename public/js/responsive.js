$(function () {
  resizefunctions();
});
$(window).load(function(){
  jQuery.event.add(window, "resize", resizefunctions);
});

function resizefunctions(){
  topHeight();
}

function topHeight() {
  var height = $(window).height();
  $(".jumbotron").height(height-300);
};