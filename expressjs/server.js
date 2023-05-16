const express = require("express")
const app = express()

//printing 
app.get("/",(request,response)=>{
    response.send("<h1>Hello From My First Express Js Server</h1>")
})
//crating more routes 
app.get("/contact",function(req,res){
    res.send("<h1 style='color:green'>Please Contact me www.thecodecamp.org</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>this is about me page</h1>")
})
app.listen(3000,()=>{
    console.log("the express server has been started on port 3000")
})