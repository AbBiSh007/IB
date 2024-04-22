const mongoose=require("mongoose")
require('dotenv').config()

const connectDB= mongoose.connect("mongodb+srv://abhigyankumar202210101140025:AbhigyanJK7@abhigyan.rb3fd8f.mongodb.net/Unreal?retryWrites=true&w=majority&appName=Abhigyan");
module.exports={
    connectDB
}