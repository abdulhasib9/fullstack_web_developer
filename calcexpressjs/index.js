const express= require("express")
const bodyParser = require("body-parser")
const app= express()

//using the body parser 
app.use(bodyParser.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.post("/",(req,res)=>{
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    let result =num1+num2;

    res.send(result)
})

app.listen(3000,()=>{
    console.log("express server started on port 3000")
})