$(document).ready(function(){
  let data = [
    { name : '장원영', age :21},
    { name : '안유진', age :22},
    { name : '리즈', age :21},
    { name : '레이', age :22},
    { name : '이서', age :18},
    { name : '가을', age :23},
  ]

  $("#btnforLoop").on("click", function(){
    let result = ''
    //for 구문
    for(let i = 0; i < data.length; i++){
      result = result + `
      <tr>
          <td>${i+1}</td>
          <td>${data[i].name}</td>
          <td>${data[i].age}</td>
        </tr>
        `
    }
    $("#forOut").html(result)
  })


  $("#btnforEach").on("click",function(){
    let result = '';
    //for~Each 구문
    data.forEach((x,index)=>{
      result = result + `
      <tr>
          <td>${index+1}</td>
          <td>${x.name}</td>
          <td>${x.age}</td>
        </tr>
        `
    })
    $("#forEach").html(result)
  })

  $("#btnJQuerEach").on("click",function(){
    let result = '';

    $.each(data,(index,x)=>{
      result = result + `
      <tr>
          <td>${index+1}</td>
          <td>${x.name}</td>
          <td>${x.age}</td>
        </tr>
        `
    })
    $("#jqueryEach").html(result)
  })
})