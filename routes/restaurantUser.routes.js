const express=require('express');
const ownerRoute=express.Router();
const {signinHandler,signupHandler} = require('../controllers/restaurantOwnerAuth');

ownerRoute.post('/signup', signupHandler);
ownerRoute.post('/signin', signinHandler);

//particular owner restaurants

module.exports = ownerRoute;