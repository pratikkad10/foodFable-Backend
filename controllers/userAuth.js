//handlers for authentication of user
require('dotenv').config();
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const { userModel } = require("../models/user.model");

async function signupHandler(req, res) {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already signed up." });
    }

    const hashedPassword=await bcrypt.hash(password, 10);

    const newUser=await userModel.create({
        name,email,password:hashedPassword
    })
    res.status(200).json({ message: "User signed up." });
  } catch (error) {
    res.status(500).json({ message: "Internal server error.", error:error });
  }
}

async function signinHandler(req, res) {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
          return res.status(404).json({ message: "User not exist." });
        }
        const passwordMatch=await bcrypt.compare(password, user.password);
        if(user && passwordMatch){
            const token=jwt.sign({
                id:user._id.toString()
            }, process.env.JWT_SECRET_USER)
            res.status(200).json({ 
                message: "User signed in.", token:token 
            });
        }
      } catch (error) {
        res.status(500).json({ message: "Internal server error." });
      }
}


module.exports ={
    signupHandler,signinHandler
}
