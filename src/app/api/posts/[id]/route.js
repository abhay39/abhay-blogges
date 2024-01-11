import { NextResponse } from "next/server";
import User from "../../models/user";
import connectMONGO from "@/utils/connect";
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

export const PUT=async(req,res)=>{
    const data=await req.json();
    const id=res.params.id;
    try{
        const post=await Posts.findByIdAndUpdate(id,{
            $push:{
                likes:likedBy
            }
        });
        if(post){
            return NextResponse.json({
                "message":"Post Liked Successfully"
            },{status:200});;
        }
        else{
            return NextResponse.json({
                "message":"Error Liking Post"
            },{status:400});;
        }
    }catch(err){
        return NextResponse.json({
            "message":err.message
        })
    }

}