const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.set("view engine", "ejs")

app.get("/",(req,res)=>{

    let currentDate = new Date()
    let today = currentDate.getDay()
    let day =""
    if(today ===4){
        day ="Horry its Weekend"
    }else{
        day="opp's it work day"
    }
    res.render("todo",{currentDayType:day})

    //res.sendFile(__dirname+"/index.html")
})

app.listen(3000,()=>{
    console.log("the express server has been started on port 3000")
})