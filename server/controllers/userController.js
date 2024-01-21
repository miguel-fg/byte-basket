const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// generate Tokens
const createToken = (id) => {
    return jwt.sign({_id: id}, process.env.SECRET, { expiresIn: "3d" });
}

// login user
const login_user = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await User.login(email, password);

        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
})

// register user
const register_user = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.register(email, password);

        const token = createToken(user._id);

        res.status(200).json({ email, token});
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
})

module.exports = { login_user, register_user }