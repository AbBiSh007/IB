const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
 /* field:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    duration:{
        type: String,
        required: true
    }
    */
});

const userModel= mongoose.model('user',userSchema)

module.exports={
    userModel
}