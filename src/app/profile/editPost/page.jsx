"use client"
import React, { useEffect, useState } from 'react'
import "react-quill/dist/quill.snow.css";
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const page = ({searchParams}) => {
    const route=useRouter()
    const [post,setPost]=useState('');

    const id=searchParams.id;

    const getrelated = async () => {
      let res = await fetch(`/api/edit/${id}`);
      res = await res.json();
      setPost(res)
    };
      
    
      useEffect(()=>{
        getrelated()
      },[id])

    

    const [value, setValue] = useState();
    const [title,setTitle]=useState(post?.title)
    const [category, setCategory] = useState(post?.category);
    const getCategory=useSelector((store)=>store.allCategory);

  return (
    <div className='min-h-screen w-full '>
        <div className='  flex flex-col rounded-sm p-6'>
          <h1>{title || post[0]?.title}</h1>
            <input value={title} type="text" className=' bg-slate-200 border-none outline-none p-2 rounded-md  text-base  ' placeholder='Enter your title here'/>
            <select
                className=' mt-4 bg-slate-200 p-2'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
              <option value={category}>{category}</option>
                {
                    getCategory[0]?.map((item,index)=>{
                        return(
                        <option key={index} value={item.title}>{item.title}</option>
                        )
                    })
                }
                
            </select>
            <ReactQuill
                theme="snow"
                className=' w-full mt-2 mb-8 text-white'
                value={value}
                onChange={setValue}
                placeholder="Tell your story..."
            />
            
        </div>
    </div>
  )
}

export default page