const express= require("express")

const app= express()

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.post("/",(req,res)=>{
    res.send("thanks for posting some data")
})

app.listen(3000,()=>{
    console.log("express server started on port 3000")
})