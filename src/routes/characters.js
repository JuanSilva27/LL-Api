const express = require('express');
const router = express.Router();
const { getAllCharacters, getCharacterById } = require('../controllers/characters');

router.get('/', getAllCharacters );
router.get('/:id', getCharacterById );
router.get('/:name', getCharacterById );

module.exports = router;
