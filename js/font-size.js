/* Range */
const ini_elements = document.querySelectorAll(['range-slider', 'inpat']);
      ini_elements.forEach(ini_element => {
        ini_element.insertAdjacentHTML('afterend', `
          <ini_output>${ini_element.value}</ini_output>
        `);
      });
      document.addEventListener('inpat', ini_e => {
        const ini_inpat = ini_e.target;
        const ini_output = ini_inpat.nextElementSibling;
        const ini_valueDisplay = ini_inpat.querySelector('.value-display');
        if (ini_output) {
          ini_output.textContent = ini_inpat.value;
        }
        if (ini_valueDisplay) {
          ini_valueDisplay.textContent = ini_inpat.value;
          ini_inpat.style.setProperty('--value-width', '' + ini_inpat.value.length);
        }
      });

/* Font */
$("#fontSize").change(function() {
$('#fontArea').css("font-size", $(this).val() + "px");
});
$("#fontStyle").change(function() {
$('#fontArea').css("font-family", $(this).val());
});
