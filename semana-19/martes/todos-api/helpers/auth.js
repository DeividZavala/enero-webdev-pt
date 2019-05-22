const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.verifyToken = (req, res, next) => {
  const { authorization: token } = req.headers;

  jwt.verify(token, process.env.SECRET, (error, decoded) => {
    if (error)
      return res.status(401).json({
        error,
        message: "Token no es valido o ha expirado",
      });
    User.findById(decoded.id).then(user => {
      req.user = user;
      next();
    });
  });
};
