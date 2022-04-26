$.getJSON('//api-xfar05.herokuapp.com/api/asupan', function(asupanr) {
Swal.fire({
  title: 'Hasil : <a>'+ asupanr.result.result +'</a>',
  icon: 'success',
})
});
