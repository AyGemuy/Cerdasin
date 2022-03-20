
	var ngeklik = document.getElementById("add-bookmark");
	var ngeklik2 = document.getElementById("huruf-kecil");
	var ngeklik3 = document.getElementById("huruf-sedang");
	var ngeklik4 = document.getElementById("huruf-besar");
	var ngeklik5 = document.getElementById("di-follow");
	
	ngeklik.addEventListener("click", function () {
Toast.fire({
 icon: 'success',
 title: 'Sukses menambahkan ke bookmark'
})
;} , false);
	ngeklik2.addEventListener("click", function () {
Toast.fire({
 icon: 'success',
 title: 'Sukses mengubah ke huruf kecil'
})
;} , false);
	ngeklik3.addEventListener("click", function () {
Toast.fire({
 icon: 'success',
 title: 'Sukses mengubah ke huruf sedang'
})
;} , false);
	ngeklik4.addEventListener("click", function () {
Toast.fire({
 icon: 'success',
 title: 'Sukses mengubah ke huruf besar'
})
;} , false);
	ngeklik5.addEventListener("click", function () {
var { isConfirmed: di_follow } = swals.fire({
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
            });
            
            if(di_follow){
            await Toast.fire({
  icon: 'success',
  title: 'Okey!, Makasih ya kack :3'
  });
 } else {
            await Toast.fire({
  icon: 'warning',
  title: 'Prank ya kack!'
  });
            }
;} , false);
