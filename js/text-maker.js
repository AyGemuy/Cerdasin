$("#btn_asu").click(function(){
  $.getJSON("https://api-xfar05.herokuapp.com/api/asupan")
  .done(function(data){
    $("#vid_asu").attr('src', data.result.result);
  })
  .fail(function(){
    alert(" An error  just happened")
  })
})

