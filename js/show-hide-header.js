var mun_cul = window.pageYOffset;
window.onscroll = function(){
var hil_ang = window.pageYOffset;
if (mun_cul > hil_ang){
$("#header, #mega-button, #step-button, #toc-sh, #mobile-menu").show();
}
else {
$("#header, #mega-button, #step-button, #toc-sh, #mobile-menu").hide();
}
mun_cul = hil_ang
}
