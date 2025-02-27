//for restaurants data
const mongoose=require('mongoose');
const { boolean } = require('zod');
const ObjectId=mongoose.ObjectId;

const restaurant=new mongoose.Schema({
   name:{
    type:String,
    required:true,
   },
   address:{
    type:String,
    required:true,
   },
   ratings:{
    type:Number,
   },
   status:{
    type:boolean,
    required:true
   },
   imageUrl:{
    type:String
   },
   owner:{
    type:ObjectId,
    required:true
   }
})

const restaurantModel=mongoose.model('restaurants', restaurant);

module.exports = {restaurantModel}