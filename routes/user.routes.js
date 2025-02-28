const express=require('express');
const userRoute=express.Router();
const {signinHandler,signupHandler} = require('../controllers/userAuth');

userRoute.post('/signup', signupHandler);
userRoute.post('/signin', signinHandler);

//add review
// userRoute.post('/review')

module.exports = userRoute;