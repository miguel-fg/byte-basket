const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const requireAuth = asyncHandler(async (req, res, next) => {

    // verify authentication
    const { authorization } = req.headers 

    if(!authorization){
        return res.status(401).json({error: "Authorization token required"});
    }

    const token = authorization.split(" ")[1] // gets JWT from the request headers

    // verify the token
    try {
        const {_id} = jwt.verify(token, process.env.SECRET);

        // check user role
        const user = await User.findOne({_id}).select("role");

        if(user && user.role === "employee"){
            req.user = user;
            next();
        } else {
            res.status(403).json({ error: "Insufficient privileges"});
        }

    } catch(err) {
        console.log(err);
        res.status(401).json({error: "Request not authorized"})
    }
});

module.exports = requireAuth;