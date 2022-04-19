var prevScrollpos = window.pageYOffset;window.onscroll = function(){
var ids = ['header','mega-button','step-button'];
var currentScrollPos = window.pageYOffset;if (prevScrollpos > currentScrollPos){
document.getElementById(ids).classList.remove('show');
}
else {
document.getElementById(ids).classList.add('show');
}
prevScrollpos = currentScrollPos
}
