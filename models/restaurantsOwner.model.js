//details of restaurant owner
const mongoose=require('mongoose');
const ObjectId=mongoose.ObjectId;

const restaurantOwner=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const restaurantOwnerModel=mongoose.model('restaurantOwners', restaurantOwner);

module.exports = {restaurantOwnerModel}