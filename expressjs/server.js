const express = require("express")
const app = express()

//printing 
app.get("/",(request,response)=>{
    response.send("<h1>Hello From My First Express Js Server</h1>")
})
app.listen(3000,()=>{
    console.log("the express server has been started on port 3000")
})