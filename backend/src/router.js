const express = require('express');
const router = express.Router();

const controler = require('./controlers/animesControler')

router.get("/", controler.getAnime);

module.exports = router;