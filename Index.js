const express = require("express");
const app = express();
const PORT = 4000;



app.get("/",(req,res)=>{

    res.send("<h1>This is Get request home</h1>")
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