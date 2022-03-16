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
  position: 'center',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

            async function mulai(){
            var { value: nama } = await swals.fire({
            title: 'Siapa anda?',
            imageUrl: 'https://cdn.jsdelivr.net/gh/AyGemuy/Blogger/img/chat.png',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Hai',
            input: 'text',
            confirmButtonText: 'Hai om',
            showCancelButton: false,
            });
            
            if(nama && nama.length < 11){
            window.nama = nama;
            var { isConfirmed: ke_satu } = await swals.fire({
            title: 'Hai,' + nama + ' uwu :3',
            imageUrl: 'https://cdn.jsdelivr.net/gh/AyGemuy/Blogger/img/chat.png',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Hai',
            text: 'Siap untuk membaca!',
            showCancelButton: true,
            confirmButtonText: 'Siap',
            cancelButtonText: 'Gak',
            });
            
            if(ke_satu){
            await Toast.fire({
  icon: 'success',
  title: 'Oke!, Selamat membaca ya'
});
            }
            } else {
            await Toast.fire({
  icon: 'warning',
  title: 'Gak bisa om!!'
});
            mulai();
            }
            }
            mulai();