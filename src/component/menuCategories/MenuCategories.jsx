"use client"
import React from 'react'
import styles from './menuCategories.module.css';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const MenuCategories = () => {
  const getCategory=useSelector((store)=>store.allCategory);
  return (
    <div className={styles.categoryLists}>
        {
          getCategory[0]?.map((item,index)=>{
            return(
              <Link key={index} className={`  gap-2 flex flex-col items-center bg-slate-200 p-2 rounded-md justify-center`} href={`/blog?title=${item.title}`}>
                <img src={item.imageURL} alt='' width={32} height={32} className={` rounded-full object-cover`} />
                <span className=' text-black font-semibold'>{item.title}</span>
              </Link>
            )
          })
        }
      </div>
  )
}

export default MenuCategories