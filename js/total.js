$.getJSON('//www.googleapis.com/blogger/v3/blogs/8384880727344316369?key=AIzaSyBgkQwCIlXvdgPfaUPAlEF2Aok9NV-9tKM', function(data) {
$('#total_post_nya').on('click', function () {
Swal.fire(
  'Total',
  data.posts.totalItems + 'Postingan',
  'success'
)
 });
 $('#total_page_nya').on('click', function () {
 Swal.fire(
  'Total',
  data.pages.totalItems + 'Halaman',
  'success'
)
 });
});
