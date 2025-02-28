const { restaurantModel } = require("../models/restaurant.model");

//read
async function allRestaurantHandler(req, res) {
  try {
    const restaurants = await restaurantModel.find({});
    res.json({
      success: true,
      restaurants: restaurants,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch restaurants. Please try again later.",
    });
  }
}

//add new restaurant
async function createNewRestaurantHandler(req, res) {
  try {
    const { name, address, ratings, status, imageUrl, owner } = req.body;
    const newRestaurant = await restaurantModel.create({
      name,
      address,
      ratings,
      status,
      imageUrl,
      owner,
    });
    res.json({
      success: true,
      restaurant: newRestaurant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create restaurant. Please try again later.",
    });
  }
}

//update restaurant
async function updateRestaurantHandler(req, res) {
  try {
    const { name, address, ratings, status, imageUrl, owner, id } = req.body;
    if (!id) {
      return res.status(400).json({
        message: "enter valid id",
      });
    }
    const updatedRestaurant = await restaurantModel.findByIdAndUpdate(
      id,
      { name, address, ratings, status, imageUrl, owner },
      { new: true }
    );
    res.json({
      success: true,
      restaurant: updatedRestaurant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update restaurant. Please try again later.",
    });
  }
}

//delete restaurant
async function deleteRestaurantHandler(req, res) {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({
        message: "enter valid id",
      });
    }
    const deleteRestaurant = await restaurantModel.findByIdAndDelete(id);
    res.json({
      success: true,
      restaurant: deleteRestaurant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete restaurant. Please try again later.",
    });
  }
}

module.exports = {
  allRestaurantHandler,
  createNewRestaurantHandler,
  updateRestaurantHandler,
  deleteRestaurantHandler,
};
