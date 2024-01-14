"use client"
import Link from 'next/link';
import styles from './menuPost.module.css';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const MenuPost = ({withImage}) => {
  const getCategory=useSelector((store)=>store.allCategory);

  const getCricketPost=getCategory[0]?.filter((item)=>item.title =='sport');
  // console.log(getCricketPost.length)

  return (
    <div className={styles.items}>

        {
          getCricketPost?.length>0? (
            getCricketPost?.map((item,index)=>{
              return(
                <div className={styles.item} key={index}>
                  <Link href={`/post/${item.title}`}>
                      <div className={styles.image}>
                        <Image
                          src={item.imageURL}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className={styles.content}>
                        <h2 className={styles.title}>{item.title}</h2>
                        <p className={styles.description}>{item.description}</p>
                      </div>
                  </Link>
                </div>
              )
            })
          ):(
            <h1>No Trendingss....</h1>
          )
        }

        
      </div>
  )
}

export default MenuPost