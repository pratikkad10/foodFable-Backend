const express=require('express');
require('dotenv').config();
const app=express();


app.get('/', (req,res)=>{
    res.send("HELLO !")
})


app.listen(process.env.PORT);