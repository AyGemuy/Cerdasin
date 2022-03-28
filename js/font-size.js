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
$(document).ready(function() {
jQuery.fn.pickify = function() {
	return this.each(function() {
		$picker = $(this);
		$icon = $picker.children('.icon');
		$input = $picker.children('input.change');
		$board = $picker.children('.board');
		$choice = $board.children();
		$rainbow = $picker.children('.rainbow');
    
		var colors = $picker.attr('data-hsv').split(',');
		$picker.data('hsv', {h: colors[0], s: colors[1], v: colors[2]})
    var hex = '#'+rgb2hex(hsv2rgb({h: colors[0], s: colors[1], v: colors[2]}));
    $input.val(hex);
    $('fontArea').add($icon).css('color', hex);
		
		// making things happen
		$rainbow.slider({
      value: colors[0],
      min: 0,
      max: 360,
			slide: function(event, ui) {changeHue(ui.value)},
			stop: function() {changeColour($picker.data('hsv'), true)}
    })
		$choice.draggable({
			containment: '.board',
			cursor: 'crosshair',
			create: function() {$choice.css({'left': colors[1]*1.8, 'top': 180-colors[2]*1.8});},
			drag: function(event, ui) {changeSatVal(ui.position.left, ui.position.top)},
			stop: function() {changeColour($picker.data('hsv'), true)}
		});
		$board.on('click', function(e) {
			var left = e.pageX-$board.offset().left;
			var top = e.pageY-$board.offset().top;
			$choice.css({'left': left, 'top': top});
			changeSatVal(left, top);
			changeColour($picker.data('hsv'), true);
		});
		
		// drag var actions
		function changeHue(hue) {
			$board.css('color', 'hsl('+hue+',100%,50%)');
			var hsv = $picker.data('hsv');
			hsv.h = hue;
			changeColour(hsv);
		}
		function changeSatVal(sat,val) {
			sat = Math.floor(sat/1.8);
			val = Math.floor(100-val/1.8);
			var hsv = $picker.data('hsv');
			hsv.s = sat;
			hsv.v = val;
			changeColour(hsv);
		}
		
		// changing the colours
		function changeColour(hsv, restyle, hex) {
			var rgb = hsv2rgb(hsv);
			if (!hex) {var hex = rgb2hex(rgb)}
			$picker.data('hsv', hsv).data('hex', hex).data('rgb', rgb);
			$icon.css('color', '#'+hex);
			$input.val('#'+hex);
			if (restyle) {
				changeStyle(rgb);
			}
		}
		function changeStyle(rgb) {
			var rgb = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';
			$('fontArea').css('color', rgb);
		}
		
		// input change
		$input.keyup(function(e) {
      if (e.which != (37||39)) {
				inputChange($input.val());
    	}
		});
		function inputChange(val) {
			var hex = val.replace(/[^A-F0-9]/ig, '');
      if (hex.length > 6) {
        hex = hex.slice(0,6);
      }
			$input.val('#' + hex);
			if (hex.length == 6) {
				inputColour(hex);
			}
		}
		function inputColour(hex) {
			var hsv = hex2hsv(hex);
			$icon.css('color', '#'+hex);
			$choice.css({
				left: hsv.s*1.8,
				top: 180-hsv.v*1.8
			});
			$rainbow.children().css('left', hsv.h/3.6+'%');
			$board.css('color', 'hsl('+hue+',100%,50%)');
			changeColour(hsv, true, hex);
		}

		
		function hex2hsv(hex) {
			var r = parseInt(hex.substring(0,2),16)/255;
			var g = parseInt(hex.substring(2,4),16)/255;
			var b = parseInt(hex.substring(4,6),16)/255;
			var max = Math.max.apply(Math, [r,g,b]);
			var min = Math.min.apply(Math, [r,g,b]);
			var chr = max-min;
			hue = 0;
			val = max;
			sat = 0;
			if (val > 0) {
        sat = chr/val;
        if (sat > 0) {
          if (r == max) {
						hue = 60*(((g-min)-(b-min))/chr);
            if (hue < 0) {hue += 360;}
          } else if (g == max) { 
            hue = 120+60*(((b-min)-(r-min))/chr); 
          } else if (b == max) { 
            hue = 250+60*(((r-min)-(g-min))/chr); 
          }
      	} 
			}
			return {h: hue, s: Math.round(sat*100), v: Math.round(val*100)}
		}
		function hsv2rgb(hsv) {
			h = hsv.h;
			s = hsv.s;
			v = hsv.v;
			var r, g, b;
			var i;
			var f, p, q, t;
			h = Math.max(0, Math.min(360, h));
			s = Math.max(0, Math.min(100, s));
			v = Math.max(0, Math.min(100, v));
			s /= 100;
			v /= 100;
			if(s == 0) {
				r = g = b = v;
				return {r: Math.round(r*255), g: Math.round(g*255), b: Math.round(b*255)};
			}
			h /= 60;
			i = Math.floor(h);
			f = h - i; // factorial part of h
			p = v * (1 - s);
			q = v * (1 - s * f);
			t = v * (1 - s * (1 - f));
			switch(i) {
				case 0: r = v; g = t; b = p; break;
				case 1: r = q; g = v; b = p; break; 
				case 2: r = p; g = v; b = t; break; 
				case 3: r = p; g = q; b = v; break; 
				case 4: r = t; g = p; b = v; break; 
				default: r = v; g = p; b = q;
				}
			return {r: Math.round(r*255), g: Math.round(g*255), b: Math.round(b*255)};
		}
		function rgb2hex(rgb) {
  	  function hex(x) {
  		  return ("0" + parseInt(x).toString(16)).slice(-2);
  	  }
  	  return hex(rgb.r) + hex(rgb.g) + hex(rgb.b);
		}
	});
};

$('.picker').pickify();

});

