import mongoose, { model,models } from "mongoose";

const CategoryScheme=new mongoose.Schema({
    title:{
        type:String,
        unique:true,
    },
    imageURL:{
        type:String,
        required:true
    }
},{timestamps:true})


const Category=models.Category || model("Category",CategoryScheme)

export default Category;