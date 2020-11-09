const express = require("express");
const router = express.Router();
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth.js");
const { userById } = require("../controllers/user");

const {
  create,
  productById,
  read,
  remove,
  update,
} = require("../controllers/product.js");
router.get("/:productId", read);
router.post("/create/:userId", requireSignin, isAuth, isAdmin, create);
router.delete("/:productId/:userId", requireSignin, isAuth, isAdmin, remove);
router.put("/:productId/:userId", requireSignin, isAuth, isAdmin, update);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
