ambil_data = readJsonFromUrl('//www.googleapis.com/blogger/v3/blogs/8384880727344316369?key=AIzaSyBgkQwCIlXvdgPfaUPAlEF2Aok9NV-9tKM');
$("#total_post_nya").click(function() {
  alert(ambil_data.posts.totalItems);
});
$("#total_page_nya").click(function() {
  alert(ambil_data.pages.totalItems);
});
