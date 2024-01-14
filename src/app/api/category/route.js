import connectMONGO from "@/utils/connect";
import Posts from "../models/Posts";
import { NextResponse } from "next/server";
import Category from "../models/Category";


export const GET=async()=>{
    await connectMONGO();
    const category=await Category.find().maxTimeMS(30000);;
    return NextResponse.json(category,{status:202})
}

export const POST=async(req,res)=>{
    const data= await req.json();
    const {title,imageURL}=data;
    
    const category=new Category({
        title:title,
        imageURL:imageURL,
    })
    await connectMONGO();
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

