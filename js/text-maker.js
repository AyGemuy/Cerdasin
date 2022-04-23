const mkr_a = document.querySelector(".mkr_a"),
mkrx_a = mkr_a.querySelector(".frm_a input"),
mbtn_a = mkr_a.querySelector(".frm_a button"),
mimg_a = mkr_a.querySelector(".cdimg_a img");
let prvl_a;

mbtn_a.addEventListener("click", () => {
    let mkvl_a = mkrx_a.value.trim();
    if(!mkvl_a || prvl_a === mkvl_a) return;
    prvl_a = mkvl_a;
    mbtn_a.innerText = "Creating Txt...";
    mimg_a.src = `https://hadi-api.herokuapp.com/api/textpro/tiktok?teks1=${mkvl_a}&amp;teks2=${mkvl_a}`;
    mimg_a.addEventListener("load", () => {
        mkr_a.classList.add("active");
        mbtn_a.innerText = "Create";
    });
});

mkrx_a.addEventListener("keyup", () => {
    if(!mkrx_a.value.trim()) {
        mkr_a.classList.remove("active");
        prvl_a = "";
    }
});

const mkr_b = document.querySelector(".mkr_b"),
mkrx_b = mkr_b.querySelector(".frm_b input"),
mbtn_b = mkr_b.querySelector(".frm_b button"),
mimg_b = mkr_b.querySelector(".cdimg_b img");
let prvl_b;

mbtn_b.addEventListener("click", () => {
    let mkvl_b = mkrx_b.value.trim();
    if(!mkvl_b || prvl_b === mkvl_b) return;
    prvl_b = mkvl_b;
    mbtn_b.innerText = "Creating Txt...";
    mimg_b.src = `https://hadi-api.herokuapp.com/api/textpro/neon-devil-wings?teks=${mkvl_b}`;
    mimg_b.addEventListener("load", () => {
        mkr_b.classList.add("active");
        mbtn_b.innerText = "Create";
    });
});

mkrx_b.addEventListener("keyup", () => {
    if(!mkrx_b.value.trim()) {
        mkr_b.classList.remove("active");
        prvl_b = "";
    }
});

const mkr_c = document.querySelector(".mkr_c"),
mkrx_c = mkr_c.querySelector(".frm_c input"),
mbtn_c = mkr_c.querySelector(".frm_c button"),
mimg_c = mkr_c.querySelector(".cdimg_c img");
let prvl_c;

mbtn_c.addEventListener("click", () => {
    let mkvl_c = mkrx_c.value.trim();
    if(!mkvl_c || prvl_c === mkvl_c) return;
    prvl_c = mkvl_c;
    mbtn_c.innerText = "Creating Txt...";
    mimg_c.src = `https://hadi-api.herokuapp.com/api/textpro/futuristic-technology?teks=${mkvl_c}`;
    mimg_c.addEventListener("load", () => {
        mkr_c.classList.add("active");
        mbtn_c.innerText = "Create";
    });
});

mkrx_c.addEventListener("keyup", () => {
    if(!mkrx_c.value.trim()) {
        mkr_c.classList.remove("active");
        prvl_c = "";
    }
});

const mkr_d = document.querySelector(".mkr_d"),
mkrx_d = mkr_d.querySelector(".frm_d input"),
mbtn_d = mkr_d.querySelector(".frm_d button"),
mimg_d = mkr_d.querySelector(".cdimg_d img");
let prvl_d;

mbtn_d.addEventListener("click", () => {
    let mkvl_d = mkrx_d.value.trim();
    if(!mkvl_d || prvl_d === mkvl_d) return;
    prvl_d = mkvl_d;
    mbtn_d.innerText = "Creating Txt...";
    mimg_d.src = `https://hadi-api.herokuapp.com/api/textpro/on-the-beach?background=1&amp;teks=${mkvl_d}`;
    mimg_d.addEventListener("load", () => {
        mkr_d.classList.add("active");
        mbtn_d.innerText = "Create";
    });
});

mkrx_d.addEventListener("keyup", () => {
    if(!mkrx_d.value.trim()) {
        mkr_d.classList.remove("active");
        prvl_d = "";
    }
});

const mkr_e = document.querySelector(".mkr_e"),
mkrx_e = mkr_e.querySelector(".frm_e input"),
mbtn_e = mkr_e.querySelector(".frm_e button"),
mimg_e = mkr_e.querySelector(".cdimg_e img");
let prvl_e;

mbtn_e.addEventListener("click", () => {
    let mkvl_e = mkrx_e.value.trim();
    if(!mkvl_e || prvl_e === mkvl_e) return;
    prvl_e = mkvl_e;
    mbtn_e.innerText = "Creating Txt...";
    mimg_e.src = `https://hadi-api.herokuapp.com/api/textpro/3d-underwater-text?teks=${mkvl_e}`;
    mimg_e.addEventListener("load", () => {
        mkr_e.classList.add("active");
        mbtn_e.innerText = "Create";
    });
});

mkrx_e.addEventListener("keyup", () => {
    if(!mkrx_e.value.trim()) {
        mkr_e.classList.remove("active");
        prvl_e = "";
    }
});

const mkr_f = document.querySelector(".mkr_f"),
mkrx_f = mkr_f.querySelector(".frm_f input"),
mbtn_f = mkr_f.querySelector(".frm_f button"),
mimg_f = mkr_f.querySelector(".cdimg_f img");
let prvl_f;

mbtn_f.addEventListener("click", () => {
    let mkvl_f = mkrx_f.value.trim();
    if(!mkvl_f || prvl_f === mkvl_f) return;
    prvl_f = mkvl_f;
    mbtn_f.innerText = "Creating Txt...";
    mimg_f.src = `https://hadi-api.herokuapp.com/api/textpro/black-white-bear-mascot?teks=${mkvl_f}`;
    mimg_f.addEventListener("load", () => {
        mkr_f.classList.add("active");
        mbtn_f.innerText = "Create";
    });
});

mkrx_f.addEventListener("keyup", () => {
    if(!mkrx_f.value.trim()) {
        mkr_f.classList.remove("active");
        prvl_f = "";
    }
});

$(document).ready(function(){
  $("#btn-img").click(function(){
var get_value = $("#val-img").val();
var arr = [`https://hadi-api.herokuapp.com/api/photoxy/3d-glowing?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/3d-rainbow-bg?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/3d-summer?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/8-bit-arcade?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/army-camouflage-fabric?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/banner-metal?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/battlefield-4-rising?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/burn-paper?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/butter-fly?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/coffee-cup?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/crisp-chrome?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/csgo?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/dark-metal?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/embroidery-text?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/flaming-fire?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/flower-hearth?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/flower-typography?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/funny-cup?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/fur-effect?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/glow-rainbow?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/golden-roses?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/gradient-avatar?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/grafiti-text-cover?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/green-leaves?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/harry-poter?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/honey-text?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/love-messages?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/luxury-royal?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/metalic-gold?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/multi-material?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/nature-3d?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/neon-glow?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/neon-lights?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/on-the-silk?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/party-neon?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/put-coffee-cup?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/rainbow-shine?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/romantic-double?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/romantic-messages?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/royal-patterns?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/shadow-sky?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/smoke-typography?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/striking-3d?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/summer-nature-bg?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/summer-watermelon?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/sweet-candy?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/teks-cup?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/text-on-scary?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/tiktok-effect?text=${get_value}&text2=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/typography-leaves?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/under-cube?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/under-fall?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/under-grass?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/under-orchids?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/under-web-matrix?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/underwater?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/video-spells-name?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/vintage-text?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/wolf-metal?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/wood-hearth?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/woodblock-effect?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/wooden-3d-black?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/wooden-boards?text=${get_value}`,
`https://hadi-api.herokuapp.com/api/photoxy/write-stars?text=${get_value}`]
    for(i=0; i < arr.length ; i++) {
    $("#val-img").append('<img src="' + arr[i].src + '" style="height:60px; width: 60px;"/>');
}
  });
});
