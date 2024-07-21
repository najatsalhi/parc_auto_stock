const express = require('express')
const app = express()
app.get("/api",(req,res)=>{
    res.json({users:["admin","user"]})
})

app.listen(5000,()=>{console.log("server on port 5000") })

