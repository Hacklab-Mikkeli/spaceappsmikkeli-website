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

  //var imgHeight = $(".top .image-wrapper").find("img").height();
  //var textHeight = $(".top").find(".content").height()+100;
  //$(".top").css("min-height", imgHeight+textHeight);
};