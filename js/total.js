ambil_data = readJsonFromUrl('//www.googleapis.com/blogger/v3/blogs/8384880727344316369?key=AIzaSyBgkQwCIlXvdgPfaUPAlEF2Aok9NV-9tKM');
var post_nya = ambil_data.posts.totalItems;
var page_nya = ambil_data.pages.totalItems;
$("#total_post_nya").click(function() {
  alert(post_nya);
});
$("#total_page_nya").click(function() {
  alert(page_nya);
});
