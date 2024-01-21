const express = require("express");
const router = express.Router();

// controller

// login
router.post("/login", login_user);

// register
router.post("/register", register_user);

module.exports = router;