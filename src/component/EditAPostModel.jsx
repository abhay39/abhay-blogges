"use client"
import React, { useState } from 'react'
import "react-quill/dist/quill.snow.css";
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const EditAPostModel = ({item}) => {

    const [value, setValue] = useState(item.description);
    const [title,setTitle]=useState(item.title)
    const [category, setCategory] = useState("");
    const getCategory=useSelector((store)=>store.allCategory);

  return (
    <div className='top-0 left-0 right-0 bottom-0 min-h-screen w-full flex flex-col items-center justify-center'>
        <div className=' bg-slate-800 flex flex-col rounded-sm p-6'>
            <span className=' text-right text-xl cursor-pointer text-red-800 font-semibold'>X</span>
            <input type="text" className=' bg-slate-200 border-none outline-none p-2 rounded-md md:w-[350px] text-base  ' placeholder='Enter your title here'/>
            <ReactQuill
                theme="snow"
                className=' w-full mt-2 mb-8 text-white'
                value={value}
                onChange={setValue}
                placeholder="Tell your story..."
            />
            <select
                className=' mt-4'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                
            >
                {
                    getCategory[0]?.map((item,index)=>{
                        return(
                        <option key={index} value={item.title}>{item.title}</option>
                        )
                    })
                }
                
            </select>
        </div>
    </div>
  )
}

export default EditAPostModel