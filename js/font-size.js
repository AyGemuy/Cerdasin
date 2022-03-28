/* Range */
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

/* Font */
$("#fontSize").change(function() {
            $('#fontArea').css("font-size", $(this).val() + "px");
    });
$("#fontShadow").change(function() {
            $('#fontArea').css("text-shadow", $(this).val() + "px");
    });
$("#fontWeight").change(function() {
            $('#fontArea').css("font-weight", $(this).val());
    });    
$("#fontStyle").change(function() {
    $('#fontArea').css("font-family", $(this).val());
});
$("#borRad").change(function() {
const IniRad = document.querySelectorAll(['border-radius'])
    (IniRad, $(this).val() + "%");
});
