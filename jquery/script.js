$("h1").css("color","blue")

 $(document).ready(()=>{
    $("h1").addClass("big-heading")
    $("h1").text("Change text")
 })

 //change the attributes 
 $("a").attr("href","https://www.yahoo.com")
 $("a").addClass('big-heading')

 $("a").click(function(){
    $("a").addClass("brown")
 })
 
 //catching keypress events
$("#numbers").keypress(function (e) { 
    console.log(e.key)
    let keys =[]
    keys.push(e.key)
    console.log(keys)
 });

 //adding elements using jquery
$("h1").prepend("<span>dynamic text</span>");
$("h1").before("<button>Click</button>")

//adding animation
$("button").on("click",function(){
    $("input").hide();
})



