const Category = require("../model/category");
const { errorHandler } = require("../helpers/dbErrorHandler");
exports.create = (req, res) => {
  const category = new Category(req.body);
  console.log("gaurara");
  category.save((err, data) => {
    if (err) {
      res.status(400).json({
        error: errorHandler(err),
      });
    }

    res.json({ data });
  });
};

exports.categoryById = (req, res, next, id) => {
  Category.findById(id).exec((error, category) => {
    if (error || !category) {
      return res.status(400).json({
        error: "Category does not exist",
      });
    }

    req.category = category;
    next();
  });
};

exports.read = (req, res) => {
  return res.json(req.category);
};

exports.update = (req, res) => {
  const category = req.category;
  category.name = req.body.name;
  category.save((err, data) => {
    if (err) {
      res.status(400).json({
        error: errorHandler(err),
      });
    }

    res.json({ data });
  });
};

exports.remove = (req, res) => {
  const category = req.category;
  category.remove((err, data) => {
    if (err) {
      res.status(400).json({
        error: errorHandler(err),
      });
    }

    res.json({ data });
  });
};

exports.list = (req, res) => {
  Category.find().exec((err, data) => {
    if (err) {
      res.status(400).json({
        error: err,
      });
    }

    res.json({ data });
  });
};
