const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.listen(3000,()=>{
    console.log("the express server has been started on port 3000")
})