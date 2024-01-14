import { NextResponse } from "next/server";
import User from "../models/user"
import connectMONGO from "@/utils/connect";

export const GET=async()=>{
    await connectMONGO();
    const users=await User.find();
    return NextResponse.json(users,{status:200})
}