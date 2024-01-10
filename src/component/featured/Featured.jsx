"use client"
import React from 'react'
import style from './featured.module.css';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';

const Featured = () => {

  const userData=useSelector((store)=>store.userDetails)


  return (
    <div className={style.container}>
      {
        userData.details && (
          <h1 className={style.title}>Hey,<b> {userData?.details?.name}</b> here! Discover my stories and creative ideas.</h1>
        )
      }
      <div className={style.post}>
        <div className={style.imageContainer}>
          <Image className={style.image} src={require('./user.jpg')} alt='pic' fill/>
        </div>
        <div className={style.textContainer}>
          <h1 className={style.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
          <p className={style.postDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusamus ad? Repellendus, voluptas. Sequi reiciendis facere excepturi eum architecto, quos soluta in inventore a rerum alias tempora ullam nobis repellat!
          Dolores iusto, earum exercitationem culpa et necessitatibus excepturi saepe veniam sed dolorum doloremque natus tenetur praesentium eaque ipsam perferendis voluptatem officiis, voluptate illum fugiat! Eum quasi minima nesciunt qui iste?</p>
          <button className={style.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured