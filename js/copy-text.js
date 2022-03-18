const textElement = document.getElementById("Area-Teksnya");
const copyButton = document.getElementById("Tombol-Copy");

const copyText = (e) => {
  window.getSelection().selectAllChildren(textElement);
  document.execCommand("copy");
  Toast.fire({
  icon: 'success',
  title: 'Oke!, Sukses Copy'
});
};

copyButton.addEventListener("click", (e) => copyText(e));
