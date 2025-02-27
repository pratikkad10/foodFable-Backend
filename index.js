const express=require('express');
const userRoute = require('./routes/user.routes');
const connectToDatabase = require('./config/database');
require('dotenv').config();
const app=express();
app.use(express.json());
connectToDatabase();
app.use('/user', userRoute);

app.get('/', (req,res)=>{
    res.send("HELLO !")
})


app.listen(process.env.PORT);