const express = require("express");
const router = express.Router();

// controller
const { login_user, register_user } = require("../controllers/userController");

// login
router.post("/login", login_user);

// register
router.post("/register", register_user);

module.exports = router;
