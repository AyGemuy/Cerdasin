/* Range */
const ini_elements = document.querySelectorAll(['range-slider']);
      ini_elements.forEach(ini_element => {
        ini_element.insertAdjacentHTML('afterend', `
          <ini_output>${ini_element.value}</ini_output>
        `);
      });
      document.addEventListener('input', ini_e => {
        const ini_input = ini_e.target;
        const ini_output = ini_input.nextElementSibling;
        const ini_valueDisplay = ini_input.querySelector('.value-display');
        if (ini_output) {
          ini_output.textContent = ini_input.value;
        }
        if (ini_valueDisplay) {
          ini_valueDisplay.textContent = ini_input.value;
          ini_input.style.setProperty('--value-width', '' + ini_input.value.length);
        }
      });

/* Font */
$("#fontSize").change(function() {
$('#fontArea').css("font-size", $(this).val() + "px");
});
$("#fontStyle").change(function() {
$('#fontArea').css("font-family", $(this).val());
});
