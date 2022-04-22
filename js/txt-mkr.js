<div id='text-6' class='modal'>
<p>Thanks for clicking.</p>
<div id='text-6' class='modal'>
<p>Thanks for clicking.</p>
<div class="mkr_g">
<div class="frm_g">
        <input class='wc-dnt-box' type="text" spellcheck="false" placeholder="Enter text"/>
        <button class='button'>Create Text</button>
      </div>
      <div class="cdimg_g">
        <img class="wc-dnt-box" alt="Result" src="" />
      </div>
      </div>
      </div>
      
      const mkr_g = document.querySelector(".mkr_g"),
mkrx_g = mkr_g.querySelector(".frm_g input"),
mbtn_g = mkr_g.querySelector(".frm_g button"),
mimg_g = mkr_g.querySelector(".cdimg_g img");
let prvl_g;

      mbtn_g.addEventListener("click", () => {
    let mkvl_g = mkrx_g.value.trim();
    if(!mkvl_g || prvl_g === mkvl_g) return;
    prvl_g = mkvl_g;
    mbtn_g.innerText = "Creating Txt...";
    var tepus = [];
    var link_img = [`https://hadi-api.herokuapp.com/api/photoxy/flaming-fire?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/tiktok-effect?text=${mkvl_g}&text2=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/metalic-gold?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/shadow-sky?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/teks-cup?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/romantic-messages?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/burn-paper?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/funny-cup?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/love-messages?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/under-grass?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/romantic-double?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/coffee-cup?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/wood-hearth?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/flower-hearth?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/wooden-boards?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/3d-summer?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/wolf-metal?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/nature-3d?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/underwater?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/golden-roses?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/summer-nature-bg?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/typography-leaves?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/under-fall?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/neon-glow?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/rainbow-shine?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/army-camouflage-fabric?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/3d-glowing?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/vintage-text?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/honey-text?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/under-cube?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/green-leaves?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/gradient-avatar?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/glow-rainbow?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/write-stars?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/fur-effect?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/crisp-chrome?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/embroidery-text?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/3d-rainbow-bg?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/striking-3d?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/summer-watermelon?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/under-web-matrix?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/multi-material?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/butter-fly?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/wooden-3d-black?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/banner-metal?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/harry-poter?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/neon-lights?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/8-bit-arcade?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/put-coffee-cup?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/luxury-royal?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/text-on-scary?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/woodblock-effect?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/smoke-typography?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/sweet-candy?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/on-the-silk?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/royal-patterns?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/under-orchids?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/flower-typography?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/party-neon?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/dark-metal?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/csgo?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/grafiti-text-cover?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/video-spells-name?text=${mkvl_g}`,
`https://hadi-api.herokuapp.com/api/photoxy/battlefield-4-rising?text=${mkvl_g}`]
    mimg_g.src = tepus.push(link_img);
    mimg_g.addEventListener("load", () => {
        mkr_g.classList.add("active");
        mbtn_g.innerText = "Create";
    });
});

mkrx_g.addEventListener("keyup", () => {
    if(!mkrx_g.value.trim()) {
        mkr_g.classList.remove("active");
        prvl_g = "";
    }
});
