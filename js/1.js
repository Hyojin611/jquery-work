$(document).ready(function(){
  $("h1").click(function(){
    $(this).hide();
  })
  // .을 쓰면 class
  $(".abc").click(function(){
    $(".abc").hide();
  })
  // #을 쓰면 id
  $("#name").click(function(){
    $("#name").hide();
  })
})