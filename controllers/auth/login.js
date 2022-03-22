const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { user: service } = require("../../services");

const login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "Incorrect input data",
      });
    }

    const { email, password } = req.body;


    const user = await service.getOne({ email });
    if (!user || !user.comparePassword(password)) {
      return res.status(400).json({
        status: "error",
        code: 400,
        message: "Wrong email or password",
      });
    }

    const { SECRET_KEY } = process.env;
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

    await service.updateById(user.id, token);
    return res.status(200).json({
        status: "succes",
        code: 200,
        data:{
            token,
            "userId": user._id
        }
    })

  } catch (error) {
next(error)  }
};

module.exports = login;
