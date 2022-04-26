$.getJSON('//api-xfar05.herokuapp.com/api/asupan', function(asupanr) {
$('#btn_asu').on('click', function () {
Swal.fire({
  title: '<strong>Asupan</strong>',
  icon: 'success',
  html:
    '<iframe width="400" height="400" src="{{asupanr.result.result}}"></iframe>',
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> Great!',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  cancelButtonText:
    '<i class="fa fa-thumbs-down"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
})
 });
});
