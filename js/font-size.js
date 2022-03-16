var sfont = document.getElementById("fontArea");
	var fontBtn = document.getElementById("fontKecil");
	var fontBtn2 = document.getElementById("fontSedang");
	var fontBtn3 = document.getElementById("fontBesar");
	
	fontBtn.addEventListener("click", function () {sfont.style.fontSize ="xx-small";} , false);
	fontBtn2.addEventListener("click", function () {sfont.style.fontSize ="medium";} , false);
	fontBtn3.addEventListener("click", function () {sfont.style.fontSize ="xx-large";} , false);
