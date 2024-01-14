"use client"
import Menu from "@/component/menu/Menu";
import style from "./singlePage.module.css";
import Image from "next/image";
import Comment from "@/component/comment/Comment";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'next-share'
import { useRouter } from "next/navigation";


const SinglePage = (slug) => {
  
  const {data,status}=useSession()
  const urlll= window.location.href;
  


 
  const id=slug.params.slug;
  const [post,setPost]=useState('');
  const [isLoading,setIsLoading]=useState(false);
  
  
  const route=useRouter();

  useEffect(()=>{
    const abortController=new AbortController();
    const {signal}=abortController;

    const getSinglePost=async()=>{
    
      setIsLoading(true);
      let res=await fetch(`/api/posts/${id}`,{signal});
      res= await res.json();
      setTimeout(()=>{
        setIsLoading(false);
        setPost(res);
      },3000)
    }
    getSinglePost();

    return()=>{
      abortController.abort();
    }

  },[id])


  function calculateTimeToRead(content) {
    // Check if content is a valid string
    if (typeof content !== 'string') {
        console.error('Invalid content. Please provide a valid string.');
        return 0; // Return 0 minutes for invalid content
    }

    // Assuming an average reading speed of 200 words per minute
    const wordsPerMinute = 100;

    // Count the number of words in the content
    const wordCount = content.split(/\s+/).length;

    // Calculate the time to read in minutes
    const timeToReadMinutes = Math.ceil(wordCount / wordsPerMinute);

    return timeToReadMinutes;
}




  const timeToRead = calculateTimeToRead(post?.description);

  return (
    <div className={style.container}>
      {
        isLoading? (
          <div className={style.loader}>
              <div class={style.customLoader}></div>
                <h1>Loading</h1>
          </div>):(<>
            <div className={style.infoContainer}>
        <div className={style.textContainer}>
          <h1 className={style.title}> {post?.title}</h1>
          <div className={style.user}>
            <div className={style.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={style.avatar} />
            </div>
            <div className={style.userTextContaier}>
              <span onClick={()=>{

              }} className={`${style.username} cursor-pointer font-semibold`}>{post?.author}</span>
              <span className={style.date}>{post?.createdAt?.slice(0,10)}</span>
            </div>
          </div>
        </div>
        <div className={style.imageContainer}>
            <Image loading="lazy" src={post?.imageURL} alt="" fill className={style.image} />
        </div>
      </div>

      

      <div className={style.content}>
        <div className={style.post}>
            <div className={style.descriprion}>
              <p  dangerouslySetInnerHTML={{ __html: post?.description }} />
            </div>
            <div>
              <p>Total Views : {post?.views}</p>
              <p>Time to read this blog : {timeToRead} mins</p>
            </div>

            
                <hr style={{marginBottom:20}}/>
                  

                <div style={{display:'flex',gap:15,alignItems:'center',justifyContent:'center'}}>
                  <span className={style.likes}>
                  <FacebookShareButton
                    url={urlll}
                    quote={post?.title}
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  </span>

                  <span className={style.likes}>
                   <WhatsappShareButton
                      url={urlll}
                      title={post?.title}
                      separator=":: "
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </span>

                  <span className={style.likes}>
                    <TwitterShareButton
                      url={urlll}
                      title={post?.title}
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                  </span>
                  
                </div>
              <hr style={{marginTop:20}}/>
              

             

            {
              status==="authenticated" && (
                <div className={style.comments}>
                <Comment item={post}/>
              </div>
              )
            }
        </div>
        <Menu />
      </div>
          </>)
      }
    </div>
  );
};

export default SinglePage;
