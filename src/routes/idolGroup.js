const express = require('express');
const router = express.Router();
const { getAllIdolGroups, getIdolGroupById } = require('../controllers/idolGroup');

router.get('/', getAllIdolGroups );
router.get('/:id', getIdolGroupById );

module.exports = router;
