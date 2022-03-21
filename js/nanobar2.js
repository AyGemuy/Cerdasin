var pengaturan = {
	classname: 'nanobar-top',
    id: 'nanobar-id'
};
var oke-nanobar = new Nanobar( pengaturan );
oke-nanobar.go( 30 );
oke-nanobar.go( 76 );
oke-nanobar.go(100);

var elemen-nya = document.documentElement,
  body = document.body,
  scrollTop = 'scrollTop',
  scrollHeight = 'scrollHeight',
  progress = document.querySelector('.nanobar-progres'),
  scroll;

document.addEventListener('scroll', function() {
  scroll = (elemen-nya[scrollTop]||body[scrollTop]) / ((elemen-nya[scrollHeight]||body[scrollHeight]) - elemen-nya.clientHeight) * 100;
  progress.style.setProperty('--scroll', scroll + '%');
});
