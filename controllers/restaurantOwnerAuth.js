//handlers for authentication of restaurants owner

require('dotenv').config();
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const {restaurantOwnerModel} =require('../models/restaurantsOwner.model');

async function signupHandler(req, res) {
  try {
    const { name, email, password } = req.body;
    const user = await restaurantOwnerModel.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already signed up." });
    }

    const hashedPassword=await bcrypt.hash(password, 10);

    const newUser=await restaurantOwnerModel.create({
        name,email,password:hashedPassword
    })
    res.status(200).json({ message: "Owner signed up." });
  } catch (error) {
    res.status(500).json({ message: "Internal server error.", error:error });
  }
}

async function signinHandler(req, res) {
    try {
        const { email, password } = req.body;
        const user = await restaurantOwnerModel.findOne({ email });
        if (!user) {
          return res.status(404).json({ message: "Owner not exist." });
        }
        const passwordMatch=await bcrypt.compare(password, user.password);
        if(user && passwordMatch){
            const token=jwt.sign({
                id:user._id.toString()
            }, process.env.JWT_SECRET_RESTAURANTOWNER)
            res.status(200).json({ 
                message: "Owner signed in.", token:token 
            });
        }
      } catch (error) {
        res.status(500).json({ message: "Internal server error." });
      }
}


module.exports ={
    signupHandler,signinHandler
}
