$('#total_post_nya').on('click', function () {
 fetch('https://www.googleapis.com/blogger/v3/blogs/8384880727344316369?key=AIzaSyBgkQwCIlXvdgPfaUPAlEF2Aok9NV-9tKM'')
 .then(response => response.json())
 .then(data => {
 alert(data.posts.totalItems)
 })
 });
 $('#total_page_nya').on('click', function () {
 fetch('https://www.googleapis.com/blogger/v3/blogs/8384880727344316369?key=AIzaSyBgkQwCIlXvdgPfaUPAlEF2Aok9NV-9tKM'')
 .then(response => response.json())
 .then(data => {
 alert(data.pages.totalItems)
 })
 });
