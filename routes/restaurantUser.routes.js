const express=require('express');
const ownerRoute=express.Router();
const {signinHandler,signupHandler} = require('../controllers/restaurantOwnerAuth');
const restaurantOwnerMiddleware = require('../middleware/restaurantOwner.middleware');
const { fetchRestaurant } = require('../controllers/restaurant.controller');

ownerRoute.post('/signup', signupHandler);
ownerRoute.post('/signin', signinHandler);

ownerRoute.get('/restaurants',restaurantOwnerMiddleware, fetchRestaurant);

module.exports = ownerRoute;