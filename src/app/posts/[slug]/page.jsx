"use client"
import Menu from "@/component/menu/Menu";
import style from "./singlePage.module.css";
import Image from "next/image";
import Comment from "@/component/comment/Comment";
import { useRouter } from 'next/navigation';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AiFillLike,AiFillDislike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { IoMdShare } from "react-icons/io";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'next-share'


const SinglePage = (slug) => {
  
  const userData=useSelector((store)=>store.userDetails)
  const {data,status}=useSession()
  const urlll= window.location.href;
  


 
  const id=slug.params.slug;
  const [post,setPost]=useState('');
  const [isLoading,setIsLoading]=useState(false);
  
  

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
              <span className={style.username}>{post?.author}</span>
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
