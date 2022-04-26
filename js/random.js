$('#btn_asu').on('click', function () {
$.getJSON('//api-xfar05.herokuapp.com/api/asupan', function(asupanr) {
swals.fire({
  title: 'Hasil',
  html: 'Salin Link : <pre>'+ asupanr.result.result +'</pre>',
})
})
});

$('#btn_waifu').on('click', function () {
swals.fire({
  title: 'Waifumu!',
  imageUrl: '//api-xfar05.herokuapp.com/api/randomimage/waifu',
  confirmButtonText: '<i class="fa fa-thumbs-up"></i> Mantap',
  footer: 'By <a href="/"> Cerdasin62.</a>'
})
});

$('#btn_neko').on('click', function () {
swals.fire({
  title: 'Nekomu!',
  imageUrl: '//api-xfar05.herokuapp.com/api/randomimage/neko',
  confirmButtonText: '<i class="fa fa-thumbs-up"></i> Mantap',
  footer: 'By <a href="/"> Cerdasin62.</a>'
})
});

$('#btn_husbu').on('click', function () {
swals.fire({
  title: 'Husbumu!',
  imageUrl: '//api-xfar05.herokuapp.com/api/randomimage/husbu',
  confirmButtonText: '<i class="fa fa-thumbs-up"></i> Mantap',
  footer: 'By <a href="/"> Cerdasin62.</a>'
})
});

$('#btn_loli').on('click', function () {
swals.fire({
  title: 'Lolimu!',
  imageUrl: '//api-xfar05.herokuapp.com/api/randomimage/loli',
  confirmButtonText: '<i class="fa fa-thumbs-up"></i> Mantap',
  footer: 'By <a href="/"> Cerdasin62.</a>'
})
});

$('#btn_milf').on('click', function () {
swals.fire({
  title: 'Milfmu!',
  imageUrl: '//api-xfar05.herokuapp.com/api/randomimage/milf',
  confirmButtonText: '<i class="fa fa-thumbs-up"></i> Mantap',
  footer: 'By <a href="/"> Cerdasin62.</a>'
})
});

$('#btn_cosplay').on('click', function () {
swals.fire({
  title: 'Cosplaymu!',
  imageUrl: '//api-xfar05.herokuapp.com/api/randomimage/cosplay',
  confirmButtonText: '<i class="fa fa-thumbs-up"></i> Mantap',
  footer: 'By <a href="/"> Cerdasin62.</a>'
})
});
