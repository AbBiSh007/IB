const express=require('express');
const cors = require('cors');
const app= express();
require('dotenv').config();
const { connectDB } = require("./config/db");
const { userModel } = require("./models/user.model");
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("welcome to app")
})
app.post("/signup",async(req,res)=>{
    let  user={
        name:"Amir Khan",
    email:"amir@gmail.com"
}
    try{
         const userData= await userModel.create(user)
         await userData.save()
        /* console.log("data sent")
         res.status(200).send("user data created")
         */
    }catch (error){
        console.log(error)
    }
})
PORT = 8080;
app.listen(PORT,async(req,res)=>{
    console.log(`server is running at port ${PORT}`)
})