"use client"
import AddCategory from "@/component/AddCategory";
import TotalAdmin from "@/component/TotalAdmin";
import TotalCategory from "@/component/TotalCategory";
import TotalPost from "@/component/TotalPost";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";


const AdminPage = () => {

  const {status,data}= useSession();
  const router=useRouter();

  if (typeof window !== 'undefined') {
    if(data){
      if(data.role ==='user'){
        toast.error("As you are user you are not allowed to access this page")
        router.push("/")
      }
    }else{
      toast.error("As you are not signed in you are not allowed to access this page")
      router.push("/")
    }
  }
  
  const [active,setActive]=useState('Total Users');


  return (
    <div className=" w-full">
      <h1 className=" text-2xl font-bold">ADMIN PANEL</h1>
      <div className=" flex flex-col md:flex-row  gap-8 mt-4 mb-4 ">
        <div className=" bg-slate-600  rounded-lg p-3 sm:text-center md:w-1/4 h-[250px]">
          <ul>
            <li onClick={()=>{
              setActive('Total Users');
            }} className={`text-xl font-semibold ${active=='Total Users'?"text-white opacity-100":'text-gray-200 opacity-45'} mb-6 mt-6 cursor-pointer`}>
              Total Users
            </li>
            
            <li onClick={()=>{
              setActive('Total Posts');
            }}  className={`text-xl font-semibold ${active=='Total Posts'?"text-white opacity-100":'text-gray-200 opacity-45'} mb-6 mt-6 cursor-pointer`}>
              Total Posts
            </li>
            <li onClick={()=>{
              setActive('Total Category');
            }} className={`text-xl font-semibold ${active=='Total Category'?"text-white opacity-100":'text-gray-200 opacity-45'} mb-6 mt-6 cursor-pointer`}>
              Total Category
            </li>
            

            <li onClick={()=>{
              setActive('Add Category');
            }} className={`text-xl font-semibold ${active=='Add Category'?"text-white opacity-100":'text-gray-200 opacity-45'} mb-6 mt-6 cursor-pointer`}>
              Add Category
            </li>
          </ul>
        </div>
        <div className=" w-full">
          {
            active=='Total Users'?
            <TotalAdmin />
            :null
          }
          {
            active=='Total Posts'?
            <TotalPost />
            :null
          }
          {
            active=='Total Category'?
            <TotalCategory />
            :null
          }
          
          {
            active=='Add Category'?
            <AddCategory />
            :null
          }
          
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
