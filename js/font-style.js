
/* Font Setting */
$("#fontSize").change(function() {
$('#fontArea').css("font-size", $(this).val() + "px");
});
$("#fontStyle").change(function() {
$('#fontArea').css("font-family", $(this).val());
});
$("#fontColor").change(function() {
$('#fontArea').css("color", $(this).val());
});
$("#fontSpace").change(function() {
$('#fontArea').css("letter-spacing", $(this).val() + "px");
});
$("#sample-1").click(function(){
$('#fontArea').toggleClass( "decorated sample-1" );
});
$("#sample-2").click(function(){
$('#fontArea').toggleClass( "decorated sample-2" );
});
$("#sample-3").click(function(){
$('#fontArea').toggleClass( "decorated sample-3" );
});
$("#sample-4").click(function(){
$('#fontArea').toggleClass( "decorated sample-4" );
});
$("#sample-5").click(function(){
$('#fontArea').toggleClass( "decorated sample-5" );
});
$("#sample-6").click(function(){
$('#fontArea').toggleClass( "decorated sample-6" );
});
$("#sample-7").click(function(){
$('#fontArea').toggleClass( "decorated sample-7" );
});
$("#sample-8").click(function(){
$('#fontArea').toggleClass( "decorated sample-8" );
});

/* Slider Range */
var $element = $('input[type="range"]');

$element
  .rangeslider({
    polyfill: false,
    onInit: function() {
      var $handle = $('.rangeslider__handle', this.$range);
      updateHandle($handle[0], this.value);
    }
  })
  .on('input', function(e) {
    var $handle = $('.rangeslider__handle', e.target.nextSibling);
    updateHandle($handle[0], this.value);
  });

function updateHandle(el, val) {
  el.textContent = val;
}
