//<![CDATA[
/*
* Wendy Code Widget Coupon
* Copyright (c) 2021 https://www.wendycode.com
* Javascript Pure
*/
var waktu = 3000; // waktu munculkan pop up 3 detik
var copybtn = document.querySelector('.wc-kupon-btn'),couponText='SALIN';function wcCopyCode(){
document.querySelector('#wc-kupon-input').select(),document.execCommand('copy'),copybtn.textContent='TERSALIN',setTimeout(function(){
copybtn.innerHTML=couponText},3500)} 
var i,acc = document.getElementsByClassName('wc-kupon-accordion');for(i=0;i<acc.length;i++)acc[i].addEventListener('click',function(){
this.classList.toggle('active');var e=this.nextElementSibling;'block'===e.style.display?e.style.display='none':e.style.display='block'});
document.querySelector('.wc-kupon-close').addEventListener('click',function(){
document.querySelector('.wc-kupon-wrap').classList.remove('aktif')});
var welcomeSession=sessionStorage.getItem('welcomeSession');null===welcomeSession&&document.addEventListener('DOMContentLoaded',function(){
setTimeout(function(){
document.querySelector('.wc-kupon-wrap').classList.add('aktif'),welcomeSession=sessionStorage.setItem('welcomeSession',!0)},waktu)});
//]]> 
