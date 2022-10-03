exports.UserRegister = (req,res)=> {

    userName = req.body.name;
    userEmail = req.body.email;
    userPass = req.body.password;
    
    res.json({
        success: true,
     
        name: userName,
        email: userEmail,
        password: userPass
        
    });
};