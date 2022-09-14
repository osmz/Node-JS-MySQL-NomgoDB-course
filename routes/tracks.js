const express = require("express");
const router = express.Router();
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const { getItems, getItem, createItem } = require("../controllers/tracks");

//TODO http://localhost/tracks GET, POST, DELETE, PUT

router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
router.post("/", validatorCreateItem, createItem);

module.exports = router