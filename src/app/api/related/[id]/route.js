import { NextResponse } from "next/server";
import Posts from "../../models/Posts";
import connectMONGO from "@/utils/connect";

export const GET=async(req,res)=>{
    const data=await res;
    const title=data.params.id;
    await connectMONGO();

    const getRelatedPosts=await Posts.find({
        category:title
    })
    // console.log(getRelatedPosts);
    // const mainPost= getRelatedPosts.filter((post)=>post.category==title);


    return NextResponse.json(getRelatedPosts,{status:200});
}