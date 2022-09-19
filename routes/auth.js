const express = require("express");
const { loginCrtl, registerCrtl } = require("../controllers/auth");
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");

router.post("/register", validatorRegister, registerCrtl );

router.post("/login", validatorLogin, loginCrtl );

module.exports = router;