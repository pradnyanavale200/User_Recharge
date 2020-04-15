const express = require("express");
const router = express.Router();

const companyController = require('../controllers/transaction');

router.post("/recharge", companyController.company_recharge);

router.post("/showtransaction", companyController.company_showtransaction);
module.exports = router;