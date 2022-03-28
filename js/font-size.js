/* Slider */
class Slider {
  constructor (rangeElement, valueElement, options) {
    this.rangeElement = rangeElement
    this.valueElement = valueElement
    this.options = options

    // Attach a listener to "change" event
    this.rangeElement.addEventListener('input', this.updateSlider.bind(this))
  }

  // Initialize the slider
  init() {
    this.rangeElement.setAttribute('min', options.min)
    this.rangeElement.setAttribute('max', options.max)
    this.rangeElement.value = options.cur

    this.updateSlider()
  }

  // Format the money
  asMoney(value) {
    return 'PX ' + parseFloat(value)
      .toLocaleString('en-US', { maximumFractionDigits: 2 })
  }

  generateBackground(rangeElement) {   
    if (this.rangeElement.value === this.options.min) {
      return
    }

    let percentage =  (this.rangeElement.value - this.options.min) / (this.options.max - this.options.min) * 100
    return 'background: linear-gradient(to right, #50299c, #7a00ff ' + percentage + '%, #d3edff ' + percentage + '%, #dee1e2 100%)'
  }

  updateSlider (newValue) {
    this.valueElement.innerHTML = this.asMoney(this.rangeElement.value)
    this.rangeElement.style = this.generateBackground(this.rangeElement.value)
  }
}

let rangeElement = document.querySelector('.range [type="range"]')
let valueElement = document.querySelector('.range .range__value span') 

let options = {
  min: 0,
  max: 100,
  cur: 10
}

if (rangeElement) {
  let slider = new Slider(rangeElement, valueElement, options)

  slider.init()
}

/* Font */
document.querySelectorAll('input[type=color]').forEach(function(picker) {
  var targetLabel = document.querySelector('label[for="' + picker.id + '"]'),
    codeArea = document.createElement('span');
  codeArea.innerHTML = picker.value;
  targetLabel.appendChild(codeArea);
  picker.addEventListener('change', function() {
    codeArea.innerHTML = picker.value;
    targetLabel.appendChild(codeArea);
  });
});

$("#fontSize").change(function() {
$('#fontArea').css("font-size", $(this).val() + "px");
});
$("#fontStyle").change(function() {
$('#fontArea').css("font-family", $(this).val());
});

/* Color */
const colorSwitcher = document.querySelector(".color-switcher input");
const resultantColor = document.querySelector("#resultant-color");

function hexToRgb(hex) {
  const shortHexRegExp = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shortHexRegExp, (_, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!result) throw Error('A valid HEX must be provided');

    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    };
}

function setMainColor(color) {
    const { r, g, b } = hexToRgb(color);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    // https://en.wikipedia.org/wiki/YIQ

    let contrastColor;

    if (yiq >= 128) {
        contrastColor = "#000";
    } else {
        contrastColor = "#fff";
    }

    document.documentElement.style.setProperty("--primaryColor", color);
    document.documentElement.style.setProperty(
        "--primaryContrastColor",
        contrastColor
    );
}

colorSwitcher.addEventListener("input", ({ target }) => {
    setMainColor(target.value);
    resultantColor.innerHTML = `<h1>${target.value}</h1>`;
});
