const express = require("express");
const router = express.Router();

//TODO http://localhost/tracks GET, POST, DELETE, PUT

router.get("/", (req, res) => {
    
    const data = ["hola", "mundo"]
    
    res.send({data})
})

module.exports = router