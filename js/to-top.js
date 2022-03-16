$(document).scroll(function() {
  return $(document).scrollTop() > 400 ? $('.BackToTop').addClass('show') : $('.BackToTop').removeClass('show')
  }), $('.BackToTop').click(function() {
    return $('html,body').animate({
      scrollTop: '0'
    });
});