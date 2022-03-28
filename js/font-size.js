const elements = document.querySelectorAll(['range-slider']);

elements.forEach(element => {
  element.insertAdjacentHTML('afterend', `
    <output>${element.value}</output>
  `);
});

document.addEventListener('input', e => {
  const input = e.target;
  const output = input.nextElementSibling;
  if (output) {
    output.textContent = input.value;
  }
});

$("#fontSize").on("input",function () {
            $('#fontArea').css("font-size", $(this).val() + "px");
    });
    
$("#fontColor").on("input",function () {
            $('#fontArea').css("box-shadow", $(this).val() + "px");
    });
