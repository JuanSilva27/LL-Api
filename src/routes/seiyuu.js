const express = require('express');
const { getAllSeiyuus, getSeiyuuById } = require('../controllers/seiyuu');
const router = express.Router();

router.get('/', getAllSeiyuus );
router.get('/:id', getSeiyuuById );

module.exports = router;
