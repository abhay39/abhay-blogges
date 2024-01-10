import connectMONGO from "@/utils/connect";
import Posts from "../models/Posts";
import { NextResponse } from "next/server";
import Category from "../models/Category";

await connectMONGO();

export const GET=async()=>{
    const category=await Category.find();
    return NextResponse.json(category,{status:202})
}

export const POST=async(req,res)=>{
    const data= await req.json();
    const {title,imageURL}=data;

    const category=new Category({
        title:title,
        imageURL:imageURL,
    })
    const result=await category.save();

    if(result){
        return NextResponse.json({
            'message': "category uploaded successfully!!!"
        },{status:202});
    }else{
        return NextResponse.json({
            'message': "Something went wrong!"
        },{status:500});
    }
}