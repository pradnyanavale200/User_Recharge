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
  
  
  const user =new User({
    _id: new mongoose.Types.ObjectId(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    mobileno: req.body.mobileno,
    username: req.body.username,
    password: req.body.password,
    transactionpassword: req.body.transactionpassword,
    balance:req.body.balance
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

exports.user_findbal = async (req, res, next) => {

  console.log("req.body",req.body);

  const user = await User.findOne({username: req.body.username });
 console.log("user",user)
  if(!user) {
    return res.status(404).json({
      msg : "Login Failed"
    });
  }
  else{
    return res.status(201).json({
      msg : "Successful",
      bal: user.balance
    });
  }
    
};

exports.user_update = async (req, res, next) => {
  console.log(req.body._id);
      const student = await User.update({username: req.body.username},{balance:req.body.balance});
      
    
      if(!student) {
        return res.status(404).json({
          msg : "update Failed"
        });
      }
      else{
        return res.status(201).json({
          msg : "update Successful",
        });
      }
    
};

exports.user_checktransactionpass = async (req, res, next) => {

  console.log("req.bodytran",req.body);

  const user = await User.findOne({username: req.body.username ,transactionpassword: req.body.tranpass });

  if(!user) {
    return res.status(404).json({
      msg : "pass Failed"
    });
  }
  else{
    return res.status(201).json({
      msg : "pass succes"
    });
  }
    
};


exports.user_delete = (req, res, next) => {
  res.status(200).json({ msg: "user_delete works" })

};

