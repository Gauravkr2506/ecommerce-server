const express = require("express");
const router = express.Router();
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth.js");
const { userById } = require("../controllers/user");

const {
  create,
  categoryById,
  read,
  update,
  remove,
  list,
} = require("../controllers/category.js");

router.get("/category/:categoryId", read);

router.post("/category/create/:userId", requireSignin, isAuth, isAdmin, create);
router.put(
  "/category/create/:categoryId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  update
);
router.delete(
  "/category/create/:categoryId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);
router.get("/categories", list);

router.param("userId", userById);
router.param("categoryId", categoryById);

module.exports = router;
