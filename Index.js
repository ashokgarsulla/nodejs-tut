const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");



const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json())


app.get("/",(req,res)=>{

    res.sendFile(path.join(__dirname+"/files/Index.html"));

})

app.get("/api/v1/getdata",(req,res)=> {
    
    res.json({
        name:"Ashok",
        email:"exapmle@gmail.com",
        password:"entcrypt"
    })
})

app.post("/api/v1/register",(req,res)=> {

    userName = req.body.name;
    userEmail = req.body.email;
    userPass = req.body.password;
    
    res.json({
        success: true,
     
        name: userName,
        email: userEmail,
        password: userPass
        
    })
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