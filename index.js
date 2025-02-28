const express=require('express');
const userRoute = require('./routes/user.routes');
const ownerRoute = require('./routes/restaurantUser.routes');
const restaurantRoute=require('./routes/restaurant.routes');
const connectToDatabase = require('./config/database');

require('dotenv').config();
const app=express();
app.use(express.json());
connectToDatabase();

app.use('/user', userRoute);
app.use('/restaurantOwner', ownerRoute);
app.use('/restaurants', restaurantRoute);

app.get('/', (req,res)=>{
    res.send("HELLO THIS IS HOME PAGE!")
})

app.listen(process.env.PORT);