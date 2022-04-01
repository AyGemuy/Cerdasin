$('#add-bookmark').on('click', function () {
Toast.fire({
 icon: 'success',
 title: 'Sukses menambahkan ke bookmark'
})
});

$('#huruf-kecil').on('click', function () {
Toast.fire({
 icon: 'success',
 title: 'Sukses mengubah ke huruf kecil'
})
});

$('#huruf-sedang').on('click', function () {
Toast.fire({
 icon: 'success',
 title: 'Sukses mengubah ke huruf sedang'
})
});

$('#huruf-besar').on('click', function () {
Toast.fire({
 icon: 'success',
 title: 'Sukses mengubah ke huruf besar'
})
});

$('#di-follow').on('click', function () {
	swals.fire({
 title: 'Follow yuk kak :3',
 imageUrl: 'https://cdn.jsdelivr.net/gh/AyGemuy/Blogger/img/chat.png',
 imageWidth: 100,
 imageHeight: 100,
 imageAlt: 'Hai',
 text: 'Mau follow tydack!',
 showCancelButton: true,
 confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yups',
 cancelButtonText: '<i class="fa fa-thumbs-down"></i> Tydack',
 footer: 'By <a href="/"> Cerdasin62.</a>'
 }).then((result) => {
 if (result.isConfirmed) {
 window.open("https://www.blogger.com/follow.g?blogID=8384880727344316369");
 } else {
 Toast.fire({
 icon: 'warning',
 title: 'Prank ya kack!'
 })
}
})
});

$('#check-ip').on('click', function () {
 fetch('https://api.ipify.org?format=json')
 .then(response => response.json())
 .then(data => {
 alert(data.ip)
 })
 });

$('#change-font-size').on('click', function () {
Swal.fire({
  title: '<strong>Font <u>Size</u></strong>',
  icon: 'info',
  html:
    'You can use <b>size text</b>, ' +
    `<input id="fontSize" type="range" min="0" max="100" step="1" value="5"/>
   <output class="output"></output>`,
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> Great!',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  cancelButtonText:
    '<i class="fa fa-thumbs-down"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
})
});

$('#change-font-space').on('click', function () {
Swal.fire({
  title: '<strong>Font <u>Space</u></strong>',
  icon: 'info',
  html:
    'You can use <b>size text</b>, ' +
    `<input id="fontSpace" type="range" min="0" max="100" step="1" value="5"/>
   <output class="output"></output>`,
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> Great!',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  cancelButtonText:
    '<i class="fa fa-thumbs-down"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
})
});
