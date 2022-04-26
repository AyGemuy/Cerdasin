
$('#btn_asu').on('click', function () {
$.getJSON('//api-xfar05.herokuapp.com/api/asupan', function(asupanr) {
swals.fire({
  title: 'Hasil',
  text: 'Link :<a>'+ asupanr.result.result +'</a>',
  icon: 'success',
})
})
});

$('#btn_waifu').on('click', function () {
swals.fire({
  title: 'Hasil',
  imageUrl: '//api-xfar05.herokuapp.com/api/randomimage/waifu',
  icon: 'success',
})
});

$('#btn_neko').on('click', function () {
swals.fire({
  title: 'Hasil',
  imageUrl: '//api-xfar05.herokuapp.com/api/randomimage/neko',
  icon: 'success',
})
});

$('#btn_husbu').on('click', function () {
swals.fire({
  title: 'Hasil',
  imageUrl: '//api-xfar05.herokuapp.com/api/randomimage/husbu',
  icon: 'success',
})
});

$('#btn_loli').on('click', function () {
swals.fire({
  title: 'Hasil',
  imageUrl: '//api-xfar05.herokuapp.com/api/randomimage/loli',
  icon: 'success',
})
});

$('#btn_milf').on('click', function () {
swals.fire({
  title: 'Hasil',
  imageUrl: '//api-xfar05.herokuapp.com/api/randomimage/milf',
  icon: 'success',
})
});

$('#btn_cosplay').on('click', function () {
swals.fire({
  title: 'Hasil',
  imageUrl: '//api-xfar05.herokuapp.com/api/randomimage/cosplay',
  icon: 'success',
})
});

