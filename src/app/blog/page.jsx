"use client"
import CardList from '@/component/cardList/CardList'
import styles from './blogPage.module.css'
import Menu from '@/component/menu/Menu'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Card from '@/component/card/Card'

const page = () => {
  const [relatedProduct, setRelatedProduct]=useState([])
  const [isLoading,setIsLoading]=useState(false);
  const search=useSearchParams();
  const id=search.get('title');

  const getrelated = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/related/${id}`);
  
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
      }
  
      const data = await res.json();
      setTimeout(()=>{
        setIsLoading(false);
        setRelatedProduct(data);
      },3000)

    } catch (error) {
      console.error('Error fetching related products:', error.message);
      // Handle the error appropriately, e.g., show a message to the user or retry the request.
    }
  };
  

  useEffect(()=>{
    getrelated()
  },[id])

  return (
    <div className={styles.container}>
        {
          isLoading?(<div className={styles.loader}>
            <div class={styles.customLoader}></div>
              <h1>Loading</h1>
        </div>):(
          <>
            <h1 className={styles.title}>{id.toUpperCase()} BLOG</h1>
          <div className={styles.content}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                marginTop:50
              }}>
                {
                  relatedProduct.length>0 ?(relatedProduct.map((item)=>{
                    return(
                      <Card key={item._id} item={item}/>
                    )
                  })):(
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      marginTop:50
                    }}>
                      <h1>No related blog to {id}</h1>
                    </div>
                  )
                }
              </div>
              {/* <Menu /> */}
          </div>
          </>
        )
        }
    </div>
  )
}

export default page