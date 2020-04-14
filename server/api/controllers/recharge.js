const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Company = require("../models/recharge");
exports.company_showpack = async (req, res, next) => {

    console.log("req.body",req.body);
  
    const comp = await Company.find({company: req.body.company});
    console.log('yeye1');
    if(!comp) {
      return res.status(404).json({
        msg : "show Failed"
      });
    }
    else{
      return res.status(201).json({
        msg : "show Successful",
        pack: comp
      });
    }
    
  };
  