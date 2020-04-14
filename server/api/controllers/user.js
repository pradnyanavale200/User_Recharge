const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

function verifyToken(req,res,next) {
  if(!req.headers.authorization) {
    return res.status(401).send('unauthorized req');
  }
  let token=req.headers.authorization.split(' ')[1]
  if(token === null) {
    return res.status(401).send('unauthorized req')
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload){
    return res.status(401).send('unauthorized req');
  }
  req.userId=payload.subject
  next()
}
exports.user_signup = async (req, res, next) => {
  
  const alreadyuser = await User.findOne({email: req.body.email});

  if(alreadyuser){
    return res.status(404).json({
      msg : "Email already exist"
    });
  }

  const user =new User({
    _id: new mongoose.Types.ObjectId(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    mobileno: req.body.mobileno,
    username: req.body.username,
    password: req.body.password,
    transactionpassword: req.body.transactionpassword
  });

  user.save().then((response) =>{
    let payload= { subject: user._id}
    let token= jwt.sign(payload, 'secretKey');
    res.status(200).send({token});
  }).catch((error)=>{
    res.status(500).json({ msg: "Registration failed" });
  });
  
};

exports.user_login = async (req, res, next) => {

  console.log("req.body",req.body);

  const user = await User.findOne({username: req.body.username ,password: req.body.password });

  if(!user) {
    return res.status(404).json({
      msg : "Login Failed"
    });
  }
  else{
    let payload= { subject: user._id}
    let token= jwt.sign(payload, 'secretKey');
    return res.status(200).send({token});
  }
    
};

exports.user_forget_password = async (req, res, next) => {

  console.log("req.body",req.body)
  const emailexist = await User.findOne({email: req.body.email });

  if(!emailexist) {
    return res.status(404).json({
      msg : "Email Does not exist"
    });
  }
  const updatepassword = await User.update({email: req.body.email},{password: req.body.password });
    
    if(!updatepassword) {
      return res.status(404).json({
        msg : "Password Reset Failed"
      });
    }  
    else{
      return res.status(201).json({
        msg : "Password Reset Successful"
      });
    }   
};
 

exports.user_delete = (req, res, next) => {
  res.status(200).json({ msg: "user_delete works" })

};

