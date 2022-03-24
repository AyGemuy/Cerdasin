/* SweetAlert */
const swals = Swal.mixin({backdrop: 'rgba(0,0,0,0.4)', confirmButtonColor: '#003EFF', cancelButtonColor: '#FF0040', showCloseButton: true, allowOutsideClick: false,
showClass: {
    popup: 'animate__animated animate__rotateInDownLeft'
  },
  hideClass: {
    popup: 'animate__animated animate__rotateOutDownLeft'
  }
  });

/* Toast */
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

/* Sweet Alert Img */
/*
            async function mulai(){
            var { isConfirmed: ke_satu } = await swals.fire({
            title: 'Hai kak :3',
            imageUrl: '//cerdasin.netlify.app/img/chat.png',
            imageWidth: 40,
            imageHeight: 40,
            imageAlt: 'Hai',
            text: 'Siap untuk membaca!',
            showCancelButton: true,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yups',
            cancelButtonText: '<i class="fa fa-thumbs-down"></i> Tydack',
            footer: 'By <a href="/"> Cerdasin62.</a>'
            });
            
            if(ke_satu){
            await swals.fire({
  icon: 'success',
  title: 'Oke!, Selamat membaca ya'
  });
            } else {
            await swals.fire({
  icon: 'warning',
  title: 'Gak bisa kak, isi dulu!'
  });
            mulai();
            }
            }
            mulai();
*/

/* Sweet Alert */
async function mulai(){
            var { isConfirmed: ke_satu } = await swals.fire({
            title: 'Apakah halaman lambat?',
            icon: 'question',
            text: 'Silahkan jawab oke!',
            showCancelButton: true,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yups',
            cancelButtonText: '<i class="fa fa-thumbs-down"></i> Tydack',
            footer: 'By <a href="/"> Cerdasin62.</a>'
            });
            
            if(ke_satu){
            let katanya = ["Maklum masih pemula","Mohon maaf jika lemot","Oke","Ingfo di terima"]
            let tadaa = Math.floor(Math.random() * katanya);
            await swals.fire({
  icon: 'info',
  title: `${tadaa}`
  });
            } else {
            let katanye = ["Alhamdulilah ya","Makasih","Oke","Ingfo di terima"]
            let tadee = Math.floor(Math.random() * katanye);
            await swals.fire({
  icon: 'info',
  title: `${tadee}`
  });
            mulai();
            }
            }
            mulai();
