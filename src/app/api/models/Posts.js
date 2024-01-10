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
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    likes:{
        default:[],
        type:Array
    },
    dislikes:{
        default:[],
        type:Array
    },
    comments:{
        default:[],
        type:Array
    },
    share:{
        default:[],
        type:Array
    }
},{timestamps:true})


const Posts=models.Posts || model("Posts",PostsScheme)

export default Posts;