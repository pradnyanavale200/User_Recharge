const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Tran = require("../models/transaction");
exports.company_recharge = async (req, res, next) => {

    const tran =new Tran({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        mobileno: req.body.mobileno,
        company: req.body.company,
        amount: req.body.amount
      });
    
      tran.save().then((response) =>{
        res.status(200).json({ msg: "Registration succes" });
      }).catch((error)=>{
        res.status(500).json({ msg: "Registration failed" });
      });
      
  };
  
  exports.company_showtransaction = async (req, res, next) => {

    console.log("req.body",req.body);
  
    const comp = await Tran.find({username: req.body.username});
    
    if(!comp) {
      return res.status(404).json({
        msg : "tran Failed"
      });
    }
    else{
      return res.status(201).json({
        msg : "tran Successful",
        pack: comp
      });
    }
     
  };
