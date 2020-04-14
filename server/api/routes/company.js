const express = require("express");
const router = express.Router();

const companyController = require('../controllers/company');
console.log('yeye1')
router.get("/show", companyController.company_show);


module.exports = router;