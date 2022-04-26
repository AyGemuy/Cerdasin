$('#btn_asu').on('click', function () {
$.getJSON('//api-xfar05.herokuapp.com/api/asupan', function(asupanr) {
swals.fire({
  title: 'Hasil',
  html: 'Link :<a href="{{asupanr.result.result}}"></a>',
})
})
});

$('#btn_waifu').on('click', function () {
swals.fire({
  title: 'Hasil',
  imageUrl: '//api-xfar05.herokuapp.com/api/randomimage/waifu',
})
});

$('#btn_neko').on('click', function () {
swals.fire({
  title: 'Hasil',
  imageUrl: '//api-xfar05.herokuapp.com/api/randomimage/neko',
})
});

$('#btn_husbu').on('click', function () {
swals.fire({
  title: 'Hasil',
  imageUrl: '//api-xfar05.herokuapp.com/api/randomimage/husbu',
})
});

$('#btn_loli').on('click', function () {
swals.fire({
  title: 'Hasil',
  imageUrl: '//api-xfar05.herokuapp.com/api/randomimage/loli',
})
});

$('#btn_milf').on('click', function () {
swals.fire({
  title: 'Hasil',
  imageUrl: '//api-xfar05.herokuapp.com/api/randomimage/milf',
})
});

$('#btn_cosplay').on('click', function () {
swals.fire({
  title: 'Hasil',
  imageUrl: '//api-xfar05.herokuapp.com/api/randomimage/cosplay',
})
});
