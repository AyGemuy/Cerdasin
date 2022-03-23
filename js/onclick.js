
            var { isConfirmed: komfir-ip } = await swals.fire({
            title: 'Hai kak :3',
            imageUrl: 'https://cdn.jsdelivr.net/gh/AyGemuy/Blogger/img/chat.png',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Hai',
            text: 'Siap untuk Cek ip!',
            showCancelButton: true,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Check',
            footer: 'By <a href="/"> Cerdasin62.</a>'
            });
            
            if(komfir-ip){
            onOpen: () => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        Swal.fire({
  icon: 'success',
  title: 'Your Ip '+ data.ip +' ok!'
  });
      })
  }
     }
