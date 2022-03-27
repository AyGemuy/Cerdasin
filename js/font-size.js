function FungsiHuruf(PilihTag) {
  var listValue = PilihTag.options[PilihTag.selectedIndex].text;
  document.getElementById("fontArea").style.fontSize = listValue;
}
