const express = require("express")
const bodyParser = require("body-parser")
const app = express()

//using body parser 
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post("/",(req,res)=>{
    let weight = parseFloat(req.body.weight)
    let height = parseFloat(req.body.height)
    let result = weight /(height* height)
   // console.log(result)
    res.send("Your BMI is : "+result)

})

app.listen(3000,()=>{
    console.log("express server started on port 3000");
})