function enlargeStars(x) {
  if(x === 0) { return; }
  starId = "star" + x;
  document.getElementById(starId).style.width = "60px";
  enlargeStars(x-1);
}
 function shrinkStars(x) {
   if(x === 0) { return; }
   starId = "star" + x;
   document.getElementById(starId).style.width = "50px";
   shrinkStars(x-1);
 }

let oneStarCounter = parseInt(document.getElementById("c1").innerHTML);
let star1 = document.getElementById("star1");
star1.onclick = () => {
  oneStarCounter++;
  document.getElementById("c1").innerHTML = oneStarCounter;
  updateBars();
}

function updateBars() {
  let total = fiveStarCounter+fourStarCounter+threeStarCounter+twoStarCounter+oneStarCounter;
  let bar1height = Math.round((oneStarCounter/total)*100);
  document.getElementById("bar1").style.height = bar1height+"%";
}
