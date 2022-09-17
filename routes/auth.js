const express = require("express");
const { matchedData } = require("express-validator");
const { tokenSign } = require("../utils/handleJwt");
const { encrypt, compare } = require("../utils/handlePassword");
const { usersModel } = require("../models");
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");

router.post("/register", validatorRegister, async (req, res) => {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = {...req, password};
    const dataUser =  await usersModel.create(body);
    dataUser.set("password", undefined, { strict: false });

    const data = {
        token: await tokenSign(dataUser),
        user:dataUser
    }
    res.send({ data });
});

module.exports = router;