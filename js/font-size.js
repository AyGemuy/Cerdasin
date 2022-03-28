const meRange = document.getElementById('meRange');

meRange.addEventListener('input', (e) => {
	// Get the label (which is the nextElementSibling)
	const label = e.target.nextElementSibling;
	// Get value of the input
	const value = +e.target.value;
	// Get the width value of the input
	const meRange_width = getComputedStyle(e.target).getPropertyValue('width');
	// Get the width value of the label
	const label_width = getComputedStyle(label).getPropertyValue('width');
	// Remove 'px' and conver to number
	const num_width = +meRange_width.substring(0, meRange_width.length - 2);
	const num_label_width = +label_width.substring(0, label_width.length - 2);
	// Get min and max values
	const max = +e.target.max;
	const min = +e.target.min;
	// Calculate the left value
	const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);
	
	label.style.left = `${left}px`;
	label.innerHTML = value;
});

// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-meRange-of-numbers-to-another-meRange-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

$("#fontSize").on("input",function () {
            $('#fontArea').css("font-size", $(this).val() + "px");
    });
    
$("#fontColor").on("input",function () {
            $('#fontArea').css("font-color", $(this).val());
    });
