const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");


const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({extended : false}));

app.get("/",(req,res)=>{

    res.sendFile(path.join(__dirname+"/files/Index.html"));

})

app.post("/api/v1/login",(req,res)=> {
    res.send(`<h1>Hello : ${req.body.name}</h1>
    <h2>Email: ${req.body.email}</h2>
    <h2>pass: ${req.body.password}</h2>`);
    console.log(req.body);
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