const express = require("express");
const path = require("path");
const app = express();
const PORT = 4000;



app.get("/",(req,res)=>{

    res.sendFile(path.join(__dirname+"/files/Index.html"));

})

app.post("/api/v1/login",(req,res)=> {
    res.send("Form data is sent");
})

app.get("/about",(req,res)=>{

    res.send("<h1>This is about</h1>")
})

app.get("/contact",(req,res)=>{

    res.send("<h1>This is Get contact</h1>")
})

app.get("/service",(req,res)=>{

    res.send("<h1>This is service</h1>")
})

app.listen(PORT,()=> {
    console.log("Server is working ");
})