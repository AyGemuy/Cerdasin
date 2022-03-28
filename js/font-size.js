/* Range */
const ini_elements = document.querySelectorAll(['range-slider']);

ini_elements.forEach(element => {
  element.insertAdjacentHTML('afterend', `
    <output>${element.value}</output>
  `);
});

document.addEventListener('input', ini_e => {
  const ini_input = ini_e.target;
  const ini_output = ini_input.nextElementSibling;
  if (output) {
    ini_output.textContent = ini_input.value;
  }
});

/* Font */
$("#fontSize").change(function() {
$('#fontArea').css("font-size", $(this).val() + "px");
});
$("#fontStyle").change(function() {
$('#fontArea').css("font-family", $(this).val());
});
