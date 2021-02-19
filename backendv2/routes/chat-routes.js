const { Router } = require("express");
const { auth } = require("../middleware/auth");
const {
  index,
  create,
  messages,
  deleteChat,
} = require("../controllers/chatController.js");
const router = Router();

router.route("/").get(auth, index);
router.route("/create").post(auth, create);
router.route("/messages").get(auth, messages);
router.route("/:id").delete(auth, deleteChat);

module.exports = router;
