const express = require("express");
const { newUser, loginUser } = require("../controllers/userController");

const router = express.Router();

router.route("/login").get(loginUser);
router.route("/registre").get(newUser);

module.exports = router;