//Prevent copy paste via HTML attributes
  var body = document.body;
  body.setAttribute("oncopy", "return false");
  body.setAttribute("oncut", "return false");
  body.setAttribute("onpaste", "return false");


  //This prevents the action of right clicking
  //This is now pointless after what I implemented above
  var preventRightClick = window.addEventListener("contextmenu", function(e) {
    e.preventDefault();
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
})

Toast.fire({
  icon: 'info',
  title: 'Mau copy apa banh..'
})
  });

  //This prevents the Ctrl+C keyboard shortcut...
  //Umm...ok...No it doesn't :-/
  var preventCtrlC = window.addEventListener("keypress", function(e) {
    var str;
    for (i in e) {
      str = str + i + ": " + e[i] + "<br/>";
    }
    document.getElementById("innerContainer").innerHTML = str;
  });
