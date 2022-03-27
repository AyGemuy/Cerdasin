$(window).scroll(function() {
    if($(this).scrollTop() &gt; 200) {
        $(&#39;#back-to-top&#39;).fadeIn();
    } else {
        $(&#39;#back-to-top&#39;).fadeOut();
    }
});

$(&#39;#back-to-top&#39;).hide().click(function() {
    $(&#39;html, body&#39;).animate({scrollTop:0}, 1000);
    return false;
});
