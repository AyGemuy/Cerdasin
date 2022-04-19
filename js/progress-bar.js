/*<![CDATA[*/
var scrollTimer = null;
$(window).scroll(function() {
var viewportHeight = $(this).height(),
scrollbarHeight = viewportHeight / $(document).height() * viewportHeight,
progress = $(this).scrollTop() / ($(document).height() - viewportHeight),
distance = progress * (viewportHeight - scrollbarHeight) + scrollbarHeight / 2 - $('#scrollPersentase, #rocket-atas').height() / 2;
$('#scrollPersentase, #rocket-atas')
.css('top', distance)
.text(' (' + Math.round(progress * 100) + '%)')
.fadeIn(100);
if (scrollTimer !== null) {
clearTimeout(scrollTimer);
}
scrollTimer = setTimeout(function() {
$('#scrollPersentase, #rocket-atas').fadeOut();
}, 1500);
});
/*]]>*/
