const express = require('express');
const router = express.Router();
const { getAllSubunits, getSubunitById } = require('../controllers/subunit');

router.get('/', getAllSubunits );
router.get('/:id', getSubunitById );

module.exports = router;