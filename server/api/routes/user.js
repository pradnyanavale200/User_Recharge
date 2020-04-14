const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');

router.post("/signup", UserController.user_signup);

router.post("/findbal", UserController.user_findbal);

router.post("/login", UserController.user_login);

router.put("/updatecusto", UserController.user_update);
router.post("/forgetpassword", UserController.user_forget_password);

//router.post("/dashboard", UserController.user_dashboard);

module.exports = router;