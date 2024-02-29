const express = require("express");
const router = express.Router();

router.get("/", (_req, res) =>{
    return res.send("Hello");
});

module.exports = router;