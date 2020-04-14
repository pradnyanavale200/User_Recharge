const express = require("express");
const router = express.Router();

const companyController = require('../controllers/recharge');
console.log('yeye1')
router.post("/showpack", companyController.company_showpack);


module.exports = router;