
const Toast = Swal.mixin({
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

async function add-bookmark(){
            await Toast.fire({
 icon: 'info',
 title: 'Sukses menambahkan ke bookmark'
})
}
async function huruf-kecil(){
            await Toast.fire({
 icon: 'info',
 title: 'Sukses mengubah ke huruf kecil'
})
}
async function huruf-sedang(){
            await Toast.fire({
 icon: 'info',
 title: 'Sukses mengubah ke huruf sedang'
})
}
async function huruf-besar(){
            await Toast.fire({
 icon: 'info',
 title: 'Sukses mengubah ke huruf besar'
})
}
