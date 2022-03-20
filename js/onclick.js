var kliks = new Audio('https://www.soundjay.com/buttons/sounds/button-09a.mp3');
function add-bookmark() {
const Toast = Swal.mixin({
 toast: true,
 position: 'center',
 showConfirmButton: false,
 timer: 1200,
 timerProgressBar: true,
 didOpen: (toast) => {
toast.addEventListener('mouseenter', Swal.stopTimer)
toast.addEventListener('mouseleave', Swal.resumeTimer)
 }
})
Toast.fire({
 icon: 'success',
 title: 'Sukses menambahkan ke bookmark'
})
kliks.currentTime = 0;
kliks.play();
}
function huruf-kecil() {
const Toast = Swal.mixin({
 toast: true,
 position: 'center',
 showConfirmButton: false,
 timer: 1200,
 timerProgressBar: true,
 didOpen: (toast) => {
toast.addEventListener('mouseenter', Swal.stopTimer)
toast.addEventListener('mouseleave', Swal.resumeTimer)
 }
})
Toast.fire({
 icon: 'success',
 title: 'Sukses mengubah ke huruf kecil'
})
kliks.currentTime = 0;
kliks.play();
}
function huruf-sedang() {
const Toast = Swal.mixin({
 toast: true,
 position: 'center',
 showConfirmButton: false,
 timer: 1200,
 timerProgressBar: true,
 didOpen: (toast) => {
toast.addEventListener('mouseenter', Swal.stopTimer)
toast.addEventListener('mouseleave', Swal.resumeTimer)
 }
})
Toast.fire({
 icon: 'success',
 title: 'Sukses mengubah ke huruf sedang'
})
kliks.currentTime = 0;
kliks.play();
}
function huruf-besar() {
const Toast = Swal.mixin({
 toast: true,
 position: 'center',
 showConfirmButton: false,
 timer: 1200,
 timerProgressBar: true,
 didOpen: (toast) => {
toast.addEventListener('mouseenter', Swal.stopTimer)
toast.addEventListener('mouseleave', Swal.resumeTimer)
 }
})
Toast.fire({
 icon: 'success',
 title: 'Sukses mengubah ke huruf besar'
})
kliks.currentTime = 0;
kliks.play();
}

