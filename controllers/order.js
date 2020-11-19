const { Order, CartItem } = require("./../model/order");
const { errorHandler } = require("./../helpers/dbErrorHandler");
const { populate } = require("../model/user");

exports.create = (req, res) => {
  //   console.log("ORDER CREATE", req.body);
  req.body.order.user = req.profile;
  const order = new Order(req.body.order);
  order.save((error, data) => {
    if (error) {
      return res.status(400).json({
        error: errorHandler(error),
      });
    }

    res.json(data);
  });
};

exports.listOrders = (req, res) => {
  Order.find(),
    populate("user", _id, name, address)
      .sort("-created")
      .exec((error, orders) => {
        if (error) {
          return res.status(400).json({
            error: errorHandler(error),
          });
        }
        res.json(orders);
      });
};
