/* Loader */
$(document).ready(function(){
  setTimeout(function(){
    $('body').addClass('loaded');
  }, 1000);
});

/* Twilt */
$("#header, #mega-button, #step-button, #mobile-menu, #HTML2, #step1, #step2, #step4, #step5, #step6, #step7, #step8, #step10, #fontstyle, #qrgen, #ex8, #ex9, #nav-widget-2, #ckBox, #Label00, #tocTilt, #PopularPosts00, #HTML1, #HTML5, #HTML3,  #FeaturedPost1, #nav-widget-1, #ntfTilt").tilt({
    glare: true,
    scale: 1,
    maxGlare: .3
})

/* Style */
deco = document.querySelectorAll('.decorated');
deco.forEach(function(element) {
	element.setAttribute('data-text', element.textContent);
});
