const express = require("express");
const {
  createOnetoOneChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  removeFromGroup,
  addToGroup,
  //   createGroupChat,
  //   removeFromGroup,
  //   addToGroup,
  //   renameGroup,
} = require("../controllers/chatControllers");
const { protect } = require("../middlewares/authMiddleware");
// const { accessChat } = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post(protect, createOnetoOneChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupadd").put(protect, addToGroup);
router.route("/groupremove").put(protect, removeFromGroup);

module.exports = router;
