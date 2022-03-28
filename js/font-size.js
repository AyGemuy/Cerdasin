function FungsiSize(PilihSize) {
  var listSize = PilihSize.option[PilihSize.selectedIndex].text;
  document.getElementById("fontArea").style.fontSize = listSize;
}
function FungsiWar(PilihWar) {
  var listWar = PilihWar.option[PilihWar.selectedIndex].text;
  document.getElementById("fontArea").style.color = listWar;
}
