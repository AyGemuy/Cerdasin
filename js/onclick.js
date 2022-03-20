
const Alex = Swal.mixin({
  toast: true,
  position: 'center',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
  });

function add-bookmark(){
await Alex.fire({
 icon: 'info',
 title: 'Sukses menambahkan ke bookmark'
})
}
function huruf-kecil(){
await Alex.fire({
 icon: 'info',
 title: 'Sukses mengubah ke huruf kecil'
})
}
function huruf-sedang(){
await Alex.fire({
 icon: 'info',
 title: 'Sukses mengubah ke huruf sedang'
})
}
function huruf-besar(){
await Alex.fire({
 icon: 'info',
 title: 'Sukses mengubah ke huruf besar'
})
}
