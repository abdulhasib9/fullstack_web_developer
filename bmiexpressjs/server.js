const express = require("express")
const bodyParser = require("body-parser")
const app = express()

//using body parser 
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.send("home page")
})

app.listen(3000,()=>{
    console.log("express server started on port 3000");
})