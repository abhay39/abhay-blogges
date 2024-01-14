import { NextResponse } from "next/server";
import User from "../../models/user";

import Posts from "../../models/Posts";

export const GET=async(req,res)=>{
    // await connectMONGO();
    const id=res.params.id;
    const post=await Posts.findByIdAndUpdate(id,
        { $inc: { views: 1 } }, // Increment views by 1
        { new: true }
    );
    return NextResponse.json(post,{status:200});;
}

export const DELETE = async (req, res) => {
    const id=res.params.id;
    const isDeleted=await Posts.findByIdAndDelete(id);
    if(isDeleted){
       return NextResponse.json({
          "message": "Posts deleted successfully!!"
       },{status:200});
    }else{
      return NextResponse.json({
         "message": "Error deleting item"
      },{status:500});
    }
}