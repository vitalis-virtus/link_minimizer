const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        status: "error",
        code: 401,
        message: "No authorization",
      });
    }
    const { SECRET_KEY } = process.env;
    const decoded = jsonwebtoken.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = auth;