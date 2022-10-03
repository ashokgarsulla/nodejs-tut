const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./UserRoutes");



const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json())
app.use(router)

app.get("/",(req,res)=>{

    res.sendFile(path.join(__dirname+"/files/Index.html"));

})

app.get("/api/v1/getdata",(req,res)=> {
    
    res.json({
        name:"Ashok",
        email:"exapmle@gmail.com",
        password:"entcrypt"
    })
});

app.listen(PORT,()=> {
    console.log("Server is working ");
})