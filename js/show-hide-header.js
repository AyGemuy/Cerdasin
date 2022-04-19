var prevScrollpos = window.pageYOffset;window.onscroll = function(){
var currentScrollPos = window.pageYOffset;if (prevScrollpos > currentScrollPos){
$("#header, #mega-button, #step-button").show();
}
else {
$("#header, #mega-button, #step-button").hide();
}
prevScrollpos = currentScrollPos
}
