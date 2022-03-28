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
    
$("#fontShadow").on("input",function () {
            $('#fontArea').css("text-shadow", $(this).val() + "px" + " #ff0000");
    });
    
$("#fontWeight").on("input",function () {
            $('#fontArea').css("font-weight", $(this).val());
    });
