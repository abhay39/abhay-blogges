import connectMONGO from "@/utils/connect";
import Posts from "../models/Posts";
import { NextResponse } from "next/server";

await connectMONGO();


export const GET=async()=>{
    const posts=await Posts.find();
    return NextResponse.json(posts, {status:200});
}

export const POST=async(req,res)=>{
    const data= await req.json();
    // console.log(data);

    const newPost=new Posts({
        title:data.title,
        imageURL:data.image,
        description:data.content,
        category:data.category,
        author:data.author
    })

    const done=await newPost.save();
    if(done){
        return NextResponse.json({
            'message': "post uploaded successfully!!!"
        },{status:200});
    }else{
        return NextResponse.json({
            'message': "unable to upload post!!!"
        },{status:400});
    }

}