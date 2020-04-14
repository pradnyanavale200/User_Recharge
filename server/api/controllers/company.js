const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Company = require("../models/company");

exports.company_show = async (req, res, next) => {

    console.log("req.body",req.body);
  
    const comp = await Company.find({ });
    console.log('yeye1');
    if(!comp) {
      return res.status(404).json({
        msg : "show Failed"
      });
    }
    else{
      return res.status(201).json({
        msg : "show Successful",
        company: comp
      });
    }
      
  };
  