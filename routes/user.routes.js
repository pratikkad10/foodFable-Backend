const express=require('express');
const userRoute=express.Router();
const {signinHandler,signupHandler} = require('../controllers/userAuth');

userRoute.post('/signup', signupHandler);
userRoute.post('/signin', signinHandler);


module.exports = userRoute;