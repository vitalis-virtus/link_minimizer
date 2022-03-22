const express = require("express");
const {links: ctrl} = require('../controllers');
const auth = require('../middleware/auth.middleware');

const router = express.Router();

router.post("/generate", auth, express.json(), ctrl.generate);

router.get("/" , auth, ctrl.getAll);

router.get("/:id", auth, ctrl.getById)

module.exports = router;
