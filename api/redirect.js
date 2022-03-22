const express =require('express');
const {links: ctrl} = require('../controllers');

const router = express.Router();
router.get('/:code', ctrl.getOne)

module.exports = router;