"use client"
import EditAndUpdateCard from '@/component/EditAndUpdateCard'
import Card from '@/component/card/Card'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useLayoutEffect, useState } from 'react'


const page = () => {
    // const userData=useSelector((store)=>store.userDetails) 
    const {status, data}=useSession();
    const [totalPosts,setTotalPosts]=useState([])


  

    useLayoutEffect(()=>{
      const abortController=new AbortController();
      const {signal}=abortController;
  
      const getTotalPosts=async()=>{
        let res=await fetch("/api/posts",{signal});
        res= await res.json();
        setTotalPosts(res);
      }
      getTotalPosts();
  
      return()=>{
        abortController.abort();
      }
  
    },[])

    const onlyUserPost=totalPosts.filter((item)=>item.author===data?.name);

  return (
    <div>
        <h1 className=' text-4xl font-bold'>Profile</h1>
        <div className=' flex items-center  gap-4 mt-3'>
            <Image src={data?.imageURL} className=' rounded-full object-cover' alt='posts' height={100} width={100}/>
            <div className=''>
                <h1 className='text-xl font-bold'>{data?.name}</h1>
                <h1 className='text-base'>{data?.email}</h1>
                <h2 className=' text-xl font-bold'>Total Post:    {onlyUserPost.length || 0}</h2>
            </div>
        </div>
        <hr className=' border-2 border-red-500 w-full mt-4 mb-4'/>
        <div className=' flex flex-wrap gap-6 flex-col md:flex-row '>
            {
              onlyUserPost.length>0?(onlyUserPost.map((item,index)=>{
                return(
                  <EditAndUpdateCard item={item} key={index}/>
                )
              })):(<h1 className=' text-center text-2xl font-bold'>No Blog to show</h1>)
            }
        </div>
    </div>
  )
}

export default page