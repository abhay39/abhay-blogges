import mongoose, { model,models } from "mongoose";

const PostsScheme=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    imageURL:{
        type:String,
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    comments:{
        default:[],
        type:Array
    },
},{timestamps:true})


const Posts=models.Posts || model("Posts",PostsScheme)

export default Posts;