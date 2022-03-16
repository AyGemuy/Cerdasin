//pop up subscribe youtube channel by Cerdasin
var time = 4000;
var welcomeSession = sessionStorage.getItem('welcomeSession');if(welcomeSession === null){$(window).bind('load',function(){setTimeout(function(){$('.notif-wrap').css("display","block");welcomeSession = sessionStorage.setItem('welcomeSession',true)}
,time);$('.notif-closeIcon').click(function(){$('.notif-wrap').addClass('hide')}
)})}