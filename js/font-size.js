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
  if (iniOutput) {
    iniOutput.textContent = iniInput.value;
  }
});

/* Font */
$("#fontSize").on("input",function () {
            $('#fontArea').css("font-size", $(this).val() + "px");
    });
    
$("#fontShadow").on("input",function () {
            $('#fontArea').css("text-shadow", $(this).val() + "px");
    });
    
$("#fontWeight").on("input",function () {
            $('#fontArea').css("font-weight", $(this).val());
    });

$("#fontStyle").change(function() {
    $('#fontArea').css("font-family", $(this).val());
});

$("#borRad").on("input",function () {
const IniRad = document.querySelectorAll(['border-radius'])
    (IniRad, $(this).val() + "%");
});
