"use client"
import React, { useLayoutEffect, useState } from 'react'
import style from './featured.module.css';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Featured = () => {

  const userData=useSelector((store)=>store.userDetails)
  

  const [totalPosts,setTotalPosts]=useState([])

  const DemoCarousel = () => {
    return (
      <Carousel autoPlay infiniteLoop showThumbs={false}> 
            <div> 
                <img  src={totalPosts[0]?.imageURL}  alt="image1"/> 
                <p className={`${style.postTitle} legend`}>{totalPosts[0]?.title}</p> 

            </div> 
            <div> 
                <img src={totalPosts[1]?.imageURL}   alt="image1"/> 
                <p className={`${style.postTitle} legend`}>{totalPosts[1]?.title}</p> 

            </div> 
            <div> 
                <img src={totalPosts[2]?.imageURL}  alt="image1"/> 
                <p className={`${style.postTitle} legend`}>{totalPosts[2]?.title}</p> 
            </div> 
        </Carousel> 
    );
  };
  

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


  return (
    <div className={style.container}>
      {
        userData.details && (
          <h1 className={style.title}>Hey,<span className=' font-bold'> {userData?.details?.name}</span> here! Discover your stories and creative ideas.</h1>
        )
      }

          <div>
            <DemoCarousel />
          </div>

      {/* <div className={style.post}>
        <div className={style.imageContainer}>
          <Image className={style.image} src={totalPosts[0]?.imageURL} alt='pic' fill/>
        </div>
        <div className={style.textContainer}>
          <h1 className={style.postTitle}>{totalPosts[0]?.title} </h1>
          <p className={style.postDescription} dangerouslySetInnerHTML={{ __html: totalPosts[0]?.description.slice(0,100) }} />
          <button className={style.button}>Read More</button>
        </div>
      </div> */}
    </div>
  )
}

export default Featured