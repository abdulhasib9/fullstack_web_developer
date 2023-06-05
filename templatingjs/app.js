const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}))
let items =[]
app.get("/",(req,res)=>{

    let today = new Date()
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }

    let day = today.toLocaleDateString("en-US",options)


    res.render("todo",{currentDayType:day,newItem:items})

    //res.sendFile(__dirname+"/index.html")
})

//route for adding todo items
app.post("/add",(req,res)=>{
    let  item = req.body.addInput
    console.log(item)
    items.push(item)
    res.redirect("/")
})

app.listen(3000,()=>{
    console.log("the express server has been started on port 3000")
})