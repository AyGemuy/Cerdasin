$(document).ready(function(){
var wakTunya = null;
$(window).scroll(function() {
$('.back-to-top')
.fadeIn(100);
if (wakTunya !== null) {
clearTimeout(wakTunya);
}
wakTunya = setTimeout(function() {
$('.back-to-top').fadeOut();
}, 1500);
});

 $('.back-to-top').hide().click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
 });
 
});
