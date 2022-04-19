/*<![CDATA[*/
var prevScrollpos = window.pageYOffset;window.onscroll = function(){
var currentScrollPos = window.pageYOffset;if (prevScrollpos > currentScrollPos){
doStuff(document.querySelectorAll("#header, #mega-button, #step-button").classList.remove('show'));
} else{
doStuff(document.querySelectorAll("#header, #mega-button, #step-button").classList.add('show'));
}
prevScrollpos = currentScrollPos
}
/*]]>*/
