var prevScrollpos = window.pageYOffset;window.onscroll = function(){
var currentScrollPos = window.pageYOffset;if (prevScrollpos > currentScrollPos){
$("#header, #mega-button, #mega-button").hide();
}
else {
$("#header, #mega-button, #mega-button").show();
}
prevScrollpos = currentScrollPos
}
