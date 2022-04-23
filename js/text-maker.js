var get_value = document.getElementById("val-img").value;
var images = [`https://hadi-api.herokuapp.com/api/photoxy/3d-glowing?text=${get_value}`,
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
`https://hadi-api.herokuapp.com/api/photoxy/write-stars?text=${get_value}`];
var index = 0;
function geneRate(){
   var img = document.getElementById("hasil-img");
   index++;
   index = index % images.length; 
   img.src = images[index];
}

$('#lets_go').click(function(){
    var iniresult = document.getElementById("isi_text").value;
    document.getElementById("ini_result").innerHTML = iniresult;
	document.getElementById("get_url").href="https://hadi-api.herokuapp.com/api/photoxy/3d-glowing?text=" + iniresult;
}
