const rangeThumb = document.querySelector('.range-thumb');
const range = document.querySelector('.range-track');
const rangeValue = document.querySelector('.range-value');
const rangeTrackWidth = document.querySelector('.range-track > div');

function onDragStart(evt) {
  return false;
}

function onMouseDown(evt) {
  // evt.preventDefault();
  evt.stopPropagation();
  const { target } = evt;
  console.dir(evt)
  const { left } = target.getBoundingClientRect();
  const { clientWidth } = target;
  const trackWidth = left + clientWidth;
  let thumbPosition = 0;
  const thumbSize = Math.ceil(rangeThumb.clientWidth / 2);
  
  if (evt.button === 0) {
    document.addEventListener('mousemove', onMouseMove, false);
  }
  
  
  function onMouseUp(evt) {
    console.log(evt.type)
    document.removeEventListener('mousemove', onMouseMove);
  }
  
  range.removeEventListener('mouseup', onMouseUp, false);
  
  function onMouseMove(evt) {
    let thumbPosition = evt.clientX;
    const mousePosition = evt.clientX;
    
    thumbPosition = (left >= mousePosition) ? 0 : thumbPosition - left;
    thumbPosition = (trackWidth < mousePosition) ? clientWidth : thumbPosition;
    
    const percent = thumbPosition / clientWidth  * 100;
    rangeThumb.style.left = percent - thumbSize + '%';
    rangeTrackWidth.style.width = percent + 5 + '%';
    rangeValue.textContent = Math.floor(percent) + '%';
    rangeValue.style.left = Math.floor(percent) - 10 - thumbSize + '%';
  }
  
 
}

range.addEventListener('dragstart', onDragStart, false);
range.addEventListener('mousedown', onMouseDown, false);
















const sliderHolder = document.querySelector('.slider-holder');
const sliderValue = document.querySelector('.slider-value');
const sliderTrack = document.querySelector('.slider-track');
const slider = document.querySelector('.slider');

sliderValue.textContent = slider.value;

slider.oninput = evt => {
  let x = +evt.target.max;
  let val = +evt.target.value;
  let pos = (val/x * 100) + 10;
  sliderTrack.style.width = pos + '%'
  sliderValue.textContent = Math.round(val/x * 100);
  sliderValue.style.left = (val/x * 100 - 13) + '%';
}
