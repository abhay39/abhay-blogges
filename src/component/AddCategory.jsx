
"use client"
import React, { useState } from 'react'
import styles from '../app/write/write.module.css'
import Image from 'next/image';
import toast from 'react-hot-toast';

const upload_preset="bloggers";
const cloud_name= 'dzox9x1uq';

const AddCategory = () => {
    const [image, setImage] = useState(null);
    const [activeBtn,setActiveBtn] = useState(false);
    const [title,setTitle]=useState(null);

    const handleImageChange = async(e) => {
        setActiveBtn(true)
        const file = e.target.files[0];
        setImage(file);
        const formsss=new FormData()
        formsss.append("file",file)
        formsss.append("upload_preset",upload_preset)
        formsss.append("cloud_name",cloud_name)
        const res=await fetch("https://api.cloudinary.com/v1_1/dzox9x1uq/image/upload",{
          method:"POST",
          body:formsss
        })
        const data=await res.json()
        if(data){
          setActiveBtn(false)
          setImage(data.secure_url);
        }
      };

      const addCategories=async()=>{
        if(image==null || title==null){
          toast.error("All fields is required")
        }else{
          const res = await fetch("/api/category", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                imageURL: image,
                title: title
            })
          });
          const status=res.status;

          const resData = await res.json();
        //   console.log(resData)

          if (status==202) {
            toast.success(resData.message)
            setImage("");
            setTitle("");
          }else{
            toast.error(resData.message)
          }
        }
      }

  return (
    <div>
        <h1 className=' text-2xl font-semibold mb-2'>Add Category</h1>
        <div className=' w-full'>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} className='w-full bg-slate-200 text-black rounded-md p-3 border-none outline-none' type="text" name="" id="" placeholder='Enter your category name'/>
            <br />
            <br />
            <input type="file" name="" id="" onChange={handleImageChange}/>
            <br />
            <br />
            {
                image && (
                    <Image src={image} height={100} width={100} className='w-[100px]  h-[100px] rounded-full object-cover' alt=''/>
                )
            }
            <button onClick={addCategories} className='w-full mt-2 p-3 rounded-md bg-green-500 text-xl text-white font-bold'>Add</button>
        </div>
        {
            activeBtn && (
                <div className={styles.imageUpload}>
                    <div  className={styles.moelOfUploading}>
                      <div className={styles.loader}></div>
                      <h1>Image Uploading...</h1>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default AddCategory