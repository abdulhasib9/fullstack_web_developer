const express = require("express")

const https = require("https")
const app = express()


app.get("/",(req,res)=>{

    res.sendFile(__dirname+"/index.html")
})


// app.get("/",(req,res)=>{
//     const url ="https://api.openweathermap.org/data/2.5/weather?zip=95823,us&appid=98d3f68623faa82cfbedcbc444c32abc&q=sacramento"
//     https.get(url,(response)=>{
//         response.on("data",(data)=>{
//           const readableData=  JSON.parse(data)
//           console.log(data)
//           console.log(readableData)
//           let temp = readableData.main.temp
//           console.log(temp)
//         //console.log(readableData.main.weather[0])
        
//         })
//         console.log(response.statusCode);
//     })
//     res.send("weather api")
// })


app.listen(3000,()=>{
    console.log("the express server is running on port 3000")
})