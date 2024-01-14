import { NextResponse } from "next/server";
import Posts from "../../models/Posts";
import connectMONGO from "@/utils/connect";

export const GET=async(req,res)=>{
   const id=req.query;
   // console.log(id)
   await connectMONGO();
   const post=await Posts.findById(id);
   return NextResponse.json(post,{status:200});;
}

export const DELETE = async (req, res) => {
   const id=res.params.id;
   await connectMONGO();
   const isDeleted=await Posts.findByIdAndDelete(id);
   if(isDeleted){
      return NextResponse.json({
         "message": "Item deleted successfully!!"
      },{status:200});
   }
   return NextResponse.json({
      "message": "Error deleting item"
   },{status:500});
}