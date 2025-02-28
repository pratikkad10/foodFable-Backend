const express = require("express");
const restaurantRoute = express.Router();
const userMiddleware = require("../middleware/user.middleware");
const restaurantOwnerMiddleware = require("../middleware/restaurantOwner.middleware");
const {
  allRestaurantHandler,
  createNewRestaurantHandler,
  updateRestaurantHandler,
  deleteRestaurantHandler,
} = require("../controllers/restaurant.controller");

//all restaurants
restaurantRoute.get("/fetchAll", allRestaurantHandler);

//create restaurant
restaurantRoute.post("/create",restaurantOwnerMiddleware, createNewRestaurantHandler);
//delete restaurant
restaurantRoute.delete("/delete",restaurantOwnerMiddleware, deleteRestaurantHandler);
//update restaurant
restaurantRoute.put("/update",restaurantOwnerMiddleware, updateRestaurantHandler);



module.exports = restaurantRoute;
