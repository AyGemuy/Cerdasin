var scrollTimer = null;
$(window).scroll(function() {
$('.back-to-top')
.fadeIn(100);
if (scrollTimer !== null) {
clearTimeout(scrollTimer);
}
scrollTimer = setTimeout(function() {
$('.back-to-top').fadeOut();
}, 1500);
});
