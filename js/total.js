$.getJSON('//www.googleapis.com/blogger/v3/blogs/8384880727344316369?key=AIzaSyBgkQwCIlXvdgPfaUPAlEF2Aok9NV-9tKM', function(data) {
$('#total_post_nya').on('click', function () {
 alert('<b>Total Postingan : </b> ' + data.posts.totalItems)
 });
 $('#total_page_nya').on('click', function () {
 alert('<b>Total Halaman : </b> ' + data.pages.totalItems)
 });
});
