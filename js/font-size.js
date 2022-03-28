var dataValue = document.querySelector('.value'),
    input = document.querySelector('input.slider-input'),
    $thumb = document.querySelector('.slider__thumb'),
    $tail = document.querySelector('.slider__tail'),
    $tooltip = document.querySelector('.tooltip'),
    $innertooltip = document.querySelector('.innertooltip'),
    test = document.querySelector('.test'),
    lastValue;
  
(function init(){
  input.setAttribute('value',0);
  lastValue = input.getAttribute('value');
  $tail.style.width = 0;
  $innertooltip.innerHTML = 0;
})();


function update(event,value,maxValue){
    lastValue = Number(value);
    var move = (100/maxValue) * Number(value) +'%';
    $tail.style.width = move;
    $thumb.style.left = move;
    $tooltip.style.left = move;
    $innertooltip.innerHTML = Math.floor(lastValue);
}

function setMaxRate(){
  
  lastValue = 0;
  
  var max = document.querySelector('.setMax').value;
  input.setAttribute('max', max);
  document.querySelector('.setMax').value = '';

  $tail.style.width = 0;
  $thumb.style.left = 0;
  $innertooltip.innerHTML = 0;
  
  $tooltip.style.left = 0;
  input.setAttribute('value',0);
}

$("#fontSize").on("input",function () {
            $('#fontArea').css("font-size", $(this).val() + "px");
    });
    
$("#fontColor").on("input",function () {
            $('#fontArea').css("font-color", $(this).val());
    });
