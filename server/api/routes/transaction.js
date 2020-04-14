const express = require("express");
const router = express.Router();

const companyController = require('../controllers/transaction');
console.log('yeye1')
router.post("/recharge", companyController.company_recharge);


module.exports = router;