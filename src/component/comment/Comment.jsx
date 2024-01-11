"use client"
import Link from 'next/link'
import styles from './comment.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { BiCloudLightning } from 'react-icons/bi'
import toast from 'react-hot-toast'

const Comment = ({item}) => {
    // console.log(item)
    const [commentVal,setCommentVal]=useState('')
    const userData=useSelector((store)=>store.userDetails)
    
    const status="authenticated"

    const handleComment=async()=>{
        let res=await fetch(`/api/comment`,{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
                commentBy:userData?.details?.name,
                description:commentVal,
                postId:item._id,
                imageURL:userData?.details?.imageURL
            })
          });

        const status=res.status;
        res= await res.json();

        if(status==202){
            toast.success(res.message)
            setCommentVal('')
            window.location.reload()
        }else{
            toast.error(res.message)
        }
    }
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {
            status === "authenticated"?
            <div className={styles.write}>
                <textarea onChange={(e)=>setCommentVal(e.target.value)} rows={5} className={styles.input}  placeholder='Write a comment...' />
                <button onClick={handleComment} className={styles.button} type="submit">Submit</button>
            </div>
            :
            <div className={styles.notAuthenticated}>
                <Link href="/login">You must be logged in to post a comment</Link>
            </div>
        }
        <div className={styles.comments}>
            {
                item?.comments?.map((item,index)=>{
                    return(
                        <div key={index} className={styles.comment}>
                            <div className={styles.user}>
                                <Image src={item?.imageURL} width={50} height={50} alt='' className={styles.image} />
                                <div className={styles.userInfo}>
                                    <span className={styles.username}>{item?.commentBy}</span>
                                    <span className={styles.date}>{item?.dateAdded}</span>
                                </div>
                            </div>
                            <p className={styles.description}>{item?.description}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Comment