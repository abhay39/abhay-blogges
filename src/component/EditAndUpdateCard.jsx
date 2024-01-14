"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import EditAPostModel from './EditAPostModel';

import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const EditAndUpdateCard = ({item}) => {
  const router=useRouter();

  const deleteItem=async()=>{
    let res=await fetch(`/api/edit/${item._id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    })
    
    const status=res.status;
    res=await res.json();
    if(status===200){
      toast.success(res.message);
      window.location.reload();
    }else{
      toast.error(res.message);
    }
  }

  return (
    <div className=' bg-slate-500 text-white w-full  md:w-[370px]  text-center p-4  rounded-md'>
        <Image onClick={()=>router.push(`/posts/${item._id}`)} src={item.imageURL} alt='' height={200} width={350} className=' md:h-[200px] w-full md:w-[350px] object-cover rounded-md cursor-pointer'/>
        <h1 onClick={()=>router.push(`/posts/${item._id}`)} className=' text-xl font-semibold mt-2'>{item.title.slice(0,60)}</h1>
        <div className=' flex items-center justify-evenly mt-4'>
            <button onClick={deleteItem} className='hover:bg-red-400 p-2 rounded-full'>
                <AiOutlineDelete size={20}/>
            </button>
        </div>
    </div>
  )
}

export default EditAndUpdateCard