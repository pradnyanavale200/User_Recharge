const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Tran = require("../models/transaction");
exports.company_recharge = async (req, res, next) => {

    const tran =new Tran({
        _id: new mongoose.Types.ObjectId(),
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
