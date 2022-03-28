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

$("#fontStyle").change(function() {
    $('#fontArea').css("font-family", $(this).val());
});
