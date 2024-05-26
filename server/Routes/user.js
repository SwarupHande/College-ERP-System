const express = require('express');
const { registerUser, inviteUser, loginUser } = require('../Controllers/user');
// const authMiddleware = require('../Middleware/authMiddleware');
const userRoute = express.Router();

userRoute.post('/auth/register', registerUser);
userRoute.post('/auth/login', loginUser);
userRoute.post('/invite', inviteUser);

module.exports = userRoute;
