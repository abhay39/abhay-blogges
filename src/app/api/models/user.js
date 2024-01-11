import mongoose, { model,models } from "mongoose";

const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:[true,'Email is already in use'],
        required:[true,"Email is already in use"]
    },
    name:{
        type:String,
        required:true,
        unique:[true,'Name is already in use']
    },
    imageURL:{
        type:String,
        required:true
    },
    // password:{
    //     type:String,
    //     required:true
    // },
},{timestamps:true})


const User=models.User || model("User",UserSchema)

export default User;