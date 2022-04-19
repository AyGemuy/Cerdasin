var mun_cul = window.pageYOffset;
window.onscroll = function(){
var hil_ang = window.pageYOffset;
if (mun_cul > hil_ang){
$("#header, #mega-button, #step-button, #HTML11, #mobile-menu").show();
$("#rocket-atas'").hide();
}
else {
$("#header, #mega-button, #step-button, #HTML11, #mobile-menu").hide();
$("#rocket-atas'").show();
}
mun_cul = hil_ang
}
