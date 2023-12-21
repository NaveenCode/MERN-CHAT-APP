const express = require("express");
const {
  registerUser,
  LoginUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();
router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", LoginUser);
module.exports = router;
