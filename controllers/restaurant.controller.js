
//read
async function allRestaurantHandler(req,res) {
    try {
        res.send("all restaurants!!");
    } catch (error) {
        
    }
}

//add new restaurant
async function createNewRestaurantHandler(req,res) {
    try {
        res.send("new restaurants!!");
    } catch (error) {
        
    }
}

//update restaurant
async function updateRestaurantHandler(req,res) {
    try {
        res.send("update restaurants!!");
    } catch (error) {
        
    }
}

//delete restaurant
async function deleteRestaurantHandler(req,res) {
    try {
        res.send("delete restaurants!!");
    } catch (error) {
        
    }
}

module.exports = {
    allRestaurantHandler, 
    createNewRestaurantHandler, 
    updateRestaurantHandler,
    deleteRestaurantHandler
}