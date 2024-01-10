"use client"
import React, { useEffect, useState } from 'react'
import styles from './categoryList.module.css';
import Link from 'next/link';
import Image from 'next/image';
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
      <h1 className={styles.title}>Popular Category</h1>
      <div className={`${styles.categories}`}>
        {
          getCategory[0]?.map((item,index)=>{
            return(
              <Link key={index} className={`${styles.category} ${styles.style}`} href={`/blog?cat=${item.title}`}>
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