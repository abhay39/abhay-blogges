"use client";
import Image from "next/image";
import styles from "./write.module.css";
import { useState } from "react";
import { FaCirclePlus, FaRegFileImage, FaVideo } from "react-icons/fa6";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

import "react-quill/dist/quill.snow.css";
import {  useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';
import dynamic from 'next/dynamic';



const upload_preset="bloggers";
const cloud_name= 'dzox9x1uq';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const WritePage = () => {
  const userData = useSelector(store => store.userDetails);
  const getCategory=useSelector((store)=>store.allCategory);
  const route=useRouter();
  // console.log(getCategory[0])

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [title, setTitle] = useState(null);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState(null);
  const [activeBtn,setActiveBtn] = useState(false);
  const [postUploaded,setPostUploaded] = useState(false);

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
      setOpen(false)
      setImage(data.secure_url);
    }
  };

  const hanldeAddPost = async () => {
    if(image==null || title==null || category==null || value==null){
      toast.error("All fields are required")
    }else{
      setPostUploaded(true);
    const data = {
      title: title,
      image: image,
      content: value,
      author: userData.details.name,
      category:category
    };
    
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const status=res.status;
    console.log(status);
    const resData = await res.json();
    console.log(resData);
    if (status==200) {
      setValue("");
      setTitle("");
      setImage("");
      setOpen(false);
      setTimeout(()=>{
        toast.success(resData.message)
        setPostUploaded(false);
        route.push("/");
      },3000)
    }else{
      toast.error(resData.message)
    }
    }
  };

  const theme = useSelector(store => store.themeChanger);

  const isDisable= !title || !value || !image || !category;

  return (
    <div className={styles.container}>
      <input
        onChange={e => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
        className={styles.input}
      />
      <br />
      <label htmlFor="">Choose Category: </label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={styles.options}
      >
        {
          getCategory[0]?.map((item,index)=>{
            return(
              <option key={index} value={item.title}>{item.title}</option>
            )
          })
        }
        
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <FaCirclePlus
            color={theme === "light" ? "black" : "white"}
            size={36}
          />
        </button>
        {open &&
          <div className={styles.add}>
            <button className={styles.addButton}>
            <label htmlFor="fileInput" className="flex items-center cursor-pointer">
            <FaRegFileImage color={theme === "light" ? "black" : "white"}
                size={36}  className="rounded-full mr-2" />
          </label>
            </button>
              <input
                  onChange={handleImageChange}
                  type="file"
                  accept="image/*"
                  name="profilePic"
                  required
                  id="fileInput"
                  style={{ display: 'none' }} // Hide the actual input
                />
            <button className={styles.addButton}>
              <FaExternalLinkSquareAlt
                color={theme === "light" ? "black" : "white"}
                size={36}
              />
            </button>
            <button className={styles.addButton}>
              <FaVideo
                color={theme === "light" ? "black" : "white"}
                size={36}
              />
            </button>
          </div>}
      </div>
        <ReactQuill
          className={styles.textarea}
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      <button disabled={isDisable} onClick={hanldeAddPost} className={` w-full p-3 rounded-xl mt-3 ${isDisable?"bg-gray-100":"bg-green-600"}`}>
        Publish
      </button>

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
      {
        postUploaded && (
          <div className={styles.imageUpload}>
              <div  className={styles.moelOfUploading}>
                <div className={styles.loader}></div>
                <h1>Post Uploading...</h1>
              </div>
          </div>
        )
      }
    </div>
  );
};

export default WritePage;
