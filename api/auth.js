const express = require("express");
const { check } = require("express-validator");
const { auth: ctrl } = require("../controllers");

const router = express.Router();

router.post(
  "/register", express.json({extended: true}),

  [
    check("email", "Incorrect email").isEmail(),
    check("password", "Min length 6 symbols").isLength({
      min: 6,
    }),
  ],
  ctrl.register
);

router.post("/login", express.json(),
  [check("email", "enter normal email").normalizeEmail().isEmail(),
  check("password", "enter password").exists()
],
    ctrl.login)

module.exports = router;
