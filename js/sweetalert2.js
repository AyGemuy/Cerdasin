const swals = Swal.mixin({backdrop: 'rgba(0,0,0,0.4)', confirmButtonColor: '#003EFF', cancelButtonColor: '#FF0040', showCloseButton: true, allowOutsideClick: false,
showClass: {
    popup: 'animate__animated animate__rotateInDownLeft'
  },
  hideClass: {
    popup: 'animate__animated animate__rotateOutDownLeft'
  }
  });

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
  });

            async function mulai(){
            var { isConfirmed: ke_satu } = await swals.fire({
            title: 'Hai kak :3',
            imageUrl: 'https://cdn.jsdelivr.net/gh/AyGemuy/Blogger/img/chat.png',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Hai',
            text: 'Siap untuk membaca!',
            showCancelButton: true,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Siap',
            cancelButtonText: '<i class="fa fa-thumbs-down"></i> Gak',
            footer: 'By <a href="/">Cerdasin62.</a>'
            });
            
            if(ke_satu){
            await Toast.fire({
  icon: 'success',
  title: 'Oke!, Selamat membaca ya'
  });
            } else {
            await Toast.fire({
  icon: 'warning',
  title: 'Gak bisa om!!'
  });
            mulai();
            }
            }
            mulai();

var bel = new Audio('https://www.soundjay.com/buttons/sounds/button-09a.mp3');
function add-bookmark() {
Toast.fire({
 icon: 'success',
 title: 'Sukses menambahkan ke bookmark'
})
bel.currentTime = 0;
bel.play();
}
function huruf-kecil() {
Toast.fire({
 icon: 'success',
 title: 'Sukses mengubah ke huruf kecil'
})
bel.currentTime = 0;
bel.play();
}
function huruf-sedang() {
Toast.fire({
 icon: 'success',
 title: 'Sukses mengubah ke huruf sedang'
})
bel.currentTime = 0;
bel.play();
}
function huruf-besar() {
Toast.fire({
 icon: 'success',
 title: 'Sukses mengubah ke huruf besar'
})
bel.currentTime = 0;
bel.play();
}
