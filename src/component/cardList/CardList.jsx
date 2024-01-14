"use client"
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Pagination from '../pagination/Pagination'
import styles from  "./cardList.module.css";
import Card from '../card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { AllPostsAction } from '@/store/ThemeStore';

const CardList = ({page}) => {

  const dispatch=useDispatch();
  const [totalPosts,setTotalPosts]=useState([])


  



// ...

useEffect(() => {
  const abortController = new AbortController();
  const { signal } = abortController;

  const getTotalPosts = async () => {
    try {
      let res = await fetch("/api/posts", { signal });
      res = await res.json();
      setTotalPosts(res);
      dispatch(AllPostsAction.addPosts(res));
    } catch (error) {
      // Handle error appropriately (e.g., log it or show a user-friendly message)
      console.error("Error fetching posts:", error);
    }
  };

  getTotalPosts();

  return () => {
    abortController.abort();
  };
}, [dispatch, setTotalPosts]);



  return (
    <div className={styles.container}>
      <h1 className={styles.title}><span className=' font-bold text-2xl'>Popular Category</span></h1>
      <div className={styles.cards}>
        
        {
          totalPosts.length>0?(totalPosts.map((item,index)=>{
            return(
              <Card item={item} key={index}/>
            )
          })):(<h1>No Blog to show</h1>)
        }
        
      </div>
      <hr />
      {/* <Pagination /> */}
    </div>
  )
}

export default CardList