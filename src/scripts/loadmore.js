import 'jquery';

var isBreakPoint = function (bp) {
  var bps = [0, 640, 768, 1024],
      w = $(window).width(), min, max
  for (var i = 0, l = bps.length; i < l; i++) {
    if (bps[i] === bp) {
      min = bps[i-1] || 0
      max = bps[i]
      break
    }
  }
  return w > min && w <= max
}
var load = 6;

if (isBreakPoint(640)){
  load = 3;
}
else if (isBreakPoint(768)){
  load = 4;
}

$(function () {
  $(".blog_article").slice(0, load).show();
  $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".blog_article:hidden").slice(0, load).slideDown(2000);
      if ($(".blog_article:hidden").length == 0) {
          $("#load").fadeOut('slow');
      }
  });
});