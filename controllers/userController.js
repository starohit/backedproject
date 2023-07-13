const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
//@desc Register a user
//@route POST /api/user/register
//@access public
const registerUser = asyncHandler(async (req,res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const userAvailable = await
    res.json({ message: "Register the user "});
});

//@desc Login a user
//@route POST /api/user/login
//@access public
const loginUser = asyncHandler(async (req,res) => {
    res.json({ message: "Login user "});
});

//@desc Current user info
//@route POST /api/user/current
//@access private
const currentUser = asyncHandler(async (req,res) => {
    res.json({ message: "current user information"});
});

module.exports = {registerUser, loginUser, currentUser};