$('#btn_asu').on('click', function () {
$.getJSON('//api-xfar05.herokuapp.com/api/asupan', function(asupanr) {
Swal.fire({
  title: 'Hasil',
  text: asupanr.result.result,
  icon: 'success',
})
})
});
