const express = require("express");

const router = express.Router();

const registerUser = require("./UserController");

router.route("/register").post(registerUser);
router.route("/login").get(registerUser);
// router.route("/logout").get(registerUser);
// router.route("/forgot").get(registerUser);

module.exports = router;