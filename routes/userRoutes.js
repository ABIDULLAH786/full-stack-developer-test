const express = require("express");
const { newUser, loginUser, allUsers } = require("../controllers/userController");
const { validateUserInput } = require("../middlewares/validation");

const router = express.Router();

router.route("/all").get(allUsers);
router.route("/login").get(loginUser);
router.route("/register").post(validateUserInput, newUser);

module.exports = router;