const express=require('express');
const userRoute=express.Router();
const {signinHandler,signupHandler} = require('../controllers/userAuth');
const {reviewHandler}=require('../controllers/restaurant.controller');
const userMiddleware = require('../middleware/user.middleware');

userRoute.post('/signup', signupHandler);
userRoute.post('/signin', signinHandler);

//add review
userRoute.put('/review',userMiddleware, reviewHandler)

module.exports = userRoute;