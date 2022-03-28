function FungsiHuruf(PilihTag) {
  var listValue = PilihTag.input[PilihTag.selectedIndex].text;
  document.getElementById("fontArea").style.fontSize = listValue;
}

$('.dropdown-el').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass('expanded');
  $('#'+$(e.target).attr('for')).prop('checked',true);
});
$(document).click(function() {
  $('.dropdown-el').removeClass('expanded');
});
