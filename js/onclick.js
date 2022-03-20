
	var ngeklik = document.getElementById("add-bookmark");
	var ngeklik2 = document.getElementById("huruf-kecil");
	var ngeklik3 = document.getElementById("huruf-sedang");
	var ngeklik4 = document.getElementById("huruf-besar");
	
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
