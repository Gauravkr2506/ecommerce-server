const User = require("../model/user");

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "User not found",
      });
    }

    req.profile = user;
    next();
  });
};
