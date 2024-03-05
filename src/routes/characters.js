const express = require('express');
const router = express.Router();
const { getAllCharacters } = require('../controllers/characters');

router.get('/', getAllCharacters );

module.exports = router;
