const { restaurantModel } = require("../models/restaurant.model");
const { userModel } = require("../models/user.model");

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
    const ownerId= req.ownerId;
    const { name, address, city, status, imageUrl} = req.body;
    const newRestaurant = await restaurantModel.create({
      name,
      address,
      city,
      status,
      imageUrl,
      owner:ownerId,
    });
    res.json({
      success: true,
      restaurant: newRestaurant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create restaurant. Please try again later.",
      error:error
    });
  }
}

//update restaurant
async function updateRestaurantHandler(req, res) {
  try {
    const ownerId= req.ownerId;
    const { name, address, ratings, status, imageUrl, id } = req.body;
    if (!id) {
      return res.status(400).json({
        message: "enter valid id",
      });
    }
    const updatedRestaurant = await restaurantModel.findOneAndUpdate(
      {_id:id, owner:ownerId},
      { name, address, ratings, status, imageUrl, owner:ownerId },
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
    const ownerId= req.ownerId;
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({
        message: "enter valid id",
      });
    }
    const deleteRestaurant = await restaurantModel.findOneAndDelete( {_id:id, owner:ownerId});
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

async function reviewHandler(req, res) {
  const userId=req.userId;
  try {
    const {comment, rating, id} = req.body;
    if (!id) {
      return res.status(400).json({
        message: "enter valid id",
      });
    }
    const restaurant = await restaurantModel.findOne({ _id:id });
    const user=await userModel.findById(userId);
    const newReview = {
      reviewerName:user.name,
      rating,
      comment,
    };
  
    restaurant.reviews.push(newReview);

    const updatedRestaurant = await restaurant.save();
    res.json({
      success: true,
      restaurant: updatedRestaurant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to review restaurant. Please try again later.",
      error:error
    });
  }
}

module.exports = {
  allRestaurantHandler,
  createNewRestaurantHandler,
  updateRestaurantHandler,
  deleteRestaurantHandler,
  reviewHandler
};


