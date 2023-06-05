const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.set("view engine", "ejs")

app.get("/",(req,res)=>{

   
    let today = new Date()
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }

    let day = today.toLocaleDateString("en-US",options)


    res.render("todo",{currentDayType:day})

    //res.sendFile(__dirname+"/index.html")
})

app.listen(3000,()=>{
    console.log("the express server has been started on port 3000")
})