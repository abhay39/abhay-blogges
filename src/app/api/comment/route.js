import { NextResponse } from "next/server";
import Posts from "../models/Posts";

export const GET=async(req,res)=>{
    return NextResponse.json({
        "message":"Comment is working"
    },{status:200});
}

export const POST=async(req,res)=>{
    const dummy=await req.json();
    const {commentBy,description,postId,imageURL}= dummy
    // console.log(dummy);
    // console.log(commentBy,description,postId)

    try{
        const data={
            commentBy:commentBy,
            description:description,
            imageURL:imageURL,
            dateAdded:new Date().toLocaleDateString()
        }
        const result=await Posts.findByIdAndUpdate(postId,{
            $push:{
                comments:data
            }
        });

        if(result){
            return NextResponse.json({
                "message":"comment uploaded successfully!!!"
            },{status:202});
        }else{
            return NextResponse.json({
                "message":"Something went wrong!"
            },{status:500});
        }
    }catch(err){
        return NextResponse.json({
            "message":"Something went wrong!"
        },{status:500});
    }
}