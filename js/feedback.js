$(function() {
  $('.feedback-popup').animate({
    left: 0
  });
  
  $('#closeFeedbackPopup').on('click', function(e) {
    e.preventDefault();
    $('.feedback-popup').animate({
      left: -290
    }).css('border-right', '5px solid #00aeef');
  });
  
  $('.feedback-popup').on('click', function() {
    if ($(this).css('left') == '-290px') {
      $(this).animate({
        left: 0
      }).css('border-right', '1px solid #dce4e9');
    }
  });
});
