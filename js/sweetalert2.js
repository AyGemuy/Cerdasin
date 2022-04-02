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
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
  });

/* Sweet Alert Nanya */
/*
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
            await Toast.fire({
  icon: 'warning',
  title: `${tadaa}`
  });
            } else {
            var katanye = ["Alhamdulilah ya","Makasih","Mantap lur","Uraa.."]
            var tadee = katanye[Math.floor(Math.random()*katanye.length)];
            await Toast.fire({
  icon: 'info',
  title: `${tadee}`
  });
            }
            }
            mulai();
            */

/* Sweet Alert Toast */
async function mulai(){
            let timerInterval
Swal.fire({
  title: 'Ntar dulu bang !',
  html: 'Menutup dalam <dtk_></dtk_> milidetik.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const dtk_ = Swal.getHtmlContainer().querySelector('dtk_')
    timerInterval = setInterval(() => {
      dtk_.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('Ok')
  }
})
            }
            mulai();
