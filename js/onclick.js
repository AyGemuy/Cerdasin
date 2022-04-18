$('#add-bookmark').on('click', function () {
Toast.fire({
 icon: 'success',
 title: 'Sukses menambahkan ke bookmark'
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
 alert(data.ip + ' Your Ip')
 })
 });

$('#fontStyle').on('click', function () {
swals.fire({
  title: 'Select Font Style',
  input: 'select',
  inputOptions: {
    'Akronim': 'Akronim',
'Bad Script': 'Bad Script',
'Black Ops One': 'Black Ops One',
'Boogaloo': 'Boogaloo',
'Bubblegum Sans': 'Bubblegum Sans',
'Fira Mono': 'Fira Mono',
'Fredericka the Great': 'Fredericka the Great',
'Karantina': 'Karantina',
'Kumar One Outline': 'Kumar One Outline',
'League Script': 'League Script',
'Libre Barcode 128 Text': 'Libre Barcode 128 Text',
'Londrina Outline': 'Londrina Outline',
'Londrina Solid': 'Londrina Solid',
'Luckiest Guy': 'Luckiest Guy',
'Material Icons': 'Material Icons',
'Metal Mania': 'Metal Mania',
'Monoton': 'Monoton',
'Odibee Sans': 'Odibee Sans',
'Rancho': 'Rancho',
'Road Rage': 'Road Rage',
'Special Elite': 'Special Elite',
'Sriracha': 'Sriracha',
'Yellowtail': 'Yellowtail'
  },
  inputPlaceholder: 'Select Style',
  showCancelButton: true,
  inputValidator: function (value) {
    return new Promise(function (resolve, reject) {
      if (value != null) {
        resolve()
      }
    })
  }
}).then(function (result) {
  swals.fire({
    type: 'success',
    html: 'You selected: ' + result
  })
})
});
