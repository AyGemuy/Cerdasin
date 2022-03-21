window.onscroll = function() {
    progress-atas()
};
function progress-atas(){
    var DiGeser = document.body.scrollTop || document.documentElement.scrollTop;
    var Tingginya = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var KuGeser = (DiGeser / Tingginya) * 100;
    document.getElementById("myBar").style.width = KuGeser + "%";
}
