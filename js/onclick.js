$('#add-bookmark').on('click', function () {
Toast.fire({
 icon: 'success',
 title: 'Menambahkan ke bookmark'
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
 Toast.fire({
 icon: 'info',
 title: 'IP Anda : ' + data.ip
 })
 })
 });
