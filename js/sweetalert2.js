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
            var katanyo = ["Lemot gak?","Delay kah?","Lambat kah?","Ngeleg kah?","Pasti leg ya?"]
            var tadoo = katanyo[Math.floor(Math.random()*katanyo.length)];
            var { isConfirmed: ke_satu } = await swals.fire({
            title: `${tadoo}`,
            icon: 'question',
            text: 'Silahkan jawab oke!',
            showCancelButton: true,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yups',
            cancelButtonText: '<i class="fa fa-thumbs-down"></i> Tydack',
            footer: 'By <a href="/"> Cerdasin62.</a>'
            });
            
            if(ke_satu){
            var katanya = ["Maklum masih pemula","Apa.. Tidak mungkin","Mohon maaf jika lemot","Oke","Ingfo di terima"]
            var tadaa = katanya[Math.floor(Math.random()*katanya.length)];
            await swals.fire({
  icon: 'warning',
  title: `${tadaa}`
  });
            } else {
            var katanye = ["Alhamdulilah ya","Makasih","Mantap lur","Uraa.."]
            var tadee = katanye[Math.floor(Math.random()*katanye.length)];
            await swals.fire({
  icon: 'info',
  title: `${tadee}`
  });
            }
            }
            mulai();
