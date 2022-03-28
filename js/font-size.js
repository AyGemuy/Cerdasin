var range = document.getElementById("month-price");
var minusButton = document.querySelector(".control-minus");
var plusButton = document.querySelector(".control-plus");
var tooltip = document.querySelector(".current-value");
var steps = 16, padding = 15;
// There's a small error due to pixel truncating in Chrome
var subpixelCorrection = 0.4;

// All browsers but IE
range.addEventListener("input", function(evt) {  
  updateTooltip ();
}, false);
// IE10
range.addEventListener("change", function(evt) {  
  updateTooltip ();
}, false);

function updateTooltip () {
  tooltip.firstElementChild.textContent = range.value;
  
  var startPosition = - (tooltip.clientWidth)/2 + padding + 4;
  var stepWidth = (range.getBoundingClientRect().width - padding*2)/steps - subpixelCorrection;  
  var currentStep =  range.value - range.min;
  
  // Reposition tooltip on top of the thumb
  tooltip.style.visibility = "visible";
  tooltip.style.left = Math.round(stepWidth*currentStep + startPosition) + "px";
    
}

minusButton.addEventListener("click", function() {
  range.stepDown();
  updateTooltip ();
}, false);

plusButton.addEventListener("click", function() {
  range.stepUp();
  updateTooltip ();
}, false);

/* Font */
$("#fontSize").change(function() {
$('#fontArea').css("font-size", $(this).val() + "px");
});
$("#fontStyle").change(function() {
$('#fontArea').css("font-family", $(this).val());
});
