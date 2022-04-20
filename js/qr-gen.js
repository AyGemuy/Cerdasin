const qrwrap = document.querySelector(".qrwrap"),
qrInput = qrwrap.querySelector(".qrform input"),
generateBtn = qrwrap.querySelector(".qrform button"),
qrImg = qrwrap.querySelector(".qr-code-img img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Creating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        qrwrap.classList.add("active");
        generateBtn.innerText = "Create QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        qrwrap.classList.remove("active");
        preValue = "";
    }
});
