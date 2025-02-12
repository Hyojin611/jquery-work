$(document).ready(function(){
  $("#btn_get").on("click",function(){
    alert($("#message").text())
    alert($("#message").html())
  })

  $("#getName").on("click",function(){
    // let myName = document.querySelector("#name").value
    let myName = $("#name").val()
    alert(myName)
  })


  $("#attr-url").on("click",function(){
    const url =$("#daum").attr("href")
    $("#getDaumUrl").val(url)
  })

  $("#btn_set").on("click",function(){
    const url =$("#daum").attr("href")
    $("#idol")
    .text("장원영")
    .css("font-weight",600)
    .css("color", "blue")
  })

  $("#btn_set2").on("click",function(){
    const url =$("#daum").attr("href")
    $("#idol")
    .html("<b>장원영</b>")
    .css("color","red")
  })

  $("#btn_ive").on("click",function(){
    $("#ive").text(function(index, origin){
      let str = "안녕하세요." + origin +"입니다." + "index = " + index
        return str
    })
  })

  $("#btn_girl_group").on("click",function(){
    $(".girl-group").text(function(index,origin){
      let str = "안녕하세요." + index +"번" + origin +"입니다."
      return str
    })
  })

  $("#btn_change").on("click",function(){
    if($("#site").text() == '구글'){
      $("#site")
      .attr("href","http://www.naver.com")
      .text("네이버")
      $(this).text("구글로 바꾸기")
    }else{
      $("#site")
      .attr("href","http://www.google.com")
      .text("구글")
      $(this).text("네이버로 바꾸기")
    }
  })
})