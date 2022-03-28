/* Range */
const iniElemen = document.querySelectorAll(['range-slider']);
iniElemen.forEach(iniElement => {
  iniElement.insertAdjacentHTML('afterend', `
    <output>${iniElement.value}</output>
  `);
});
document.addEventListener('input', iniE => {
  const iniInput = iniE.target;
  const iniOutput = iniInput.nextElementSibling;
  if (output) {
    iniOutput.textContent = iniInput.value;
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
