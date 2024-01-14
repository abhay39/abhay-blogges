"use client"
import React, { useEffect, useState } from 'react'
import styles from './categoryList.module.css';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryActions } from '@/store/ThemeStore';


const CategoryList = () => {
  const dispatch=useDispatch();
  const getCategory=useSelector((store)=>store.allCategory);


  const getData=async()=>{
    let res= await fetch("/api/category");
    if(!res.ok){
      throw new Error("Couldn't get category");
    }
    res= await res.json();
    dispatch(CategoryActions.addCategory(res));
    // setTotalCategory(res);
  }

  useEffect(()=>{
    getData()
  },[dispatch])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}><span className=' font-bold text-2xl'>Popular Category</span></h1>
      <div className={`${styles.categories}`}>
        {
          getCategory[0]?.map((item,index)=>{
            return(
              <Link key={index} className={`${styles.category} ${styles.style}`} href={`/blog?title=${item.title}`}>
                <img src={item.imageURL} alt='' width={32} height={32} className={styles.image} />
              {item.title}
              </Link>
            )
          })
        }
        
      </div>
      
    </div>
  )
}

export default CategoryList