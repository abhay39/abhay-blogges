"use client"
import Link from 'next/link';
import styles from './authLinks.module.css';
import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const AuthLinks = () => {
  const router=useRouter();
  const {status,data}=useSession();
  

  const [open,setOpen]=useState(false)

  return (
    <>
      {
        status === "unauthenticated" ? (<Link className={styles.link} href="/login">Login</Link>):(<>
          <Link className={styles.link} href="/write">Write</Link>
          <Link className={styles.link} href="/profile">Profile</Link>
          {
            data?.role ==='admin' && (
              <Link className={styles.link} href="/admin">Admin</Link>
            )
          }
          <span className={styles.link} onClick={signOut}>Logout</span>
        </>)
      }
      <div className={styles.burger} onClick={()=>setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {
        open && (
          <div className={styles.responsiveMenus}>
            {/* <Link href={'/'}>HomePage</Link> */}
            <button onClick={()=>{
              router.push('/')
              setOpen(false)
            }}>Home</button>
            <button onClick={()=>{
              router.push('/about')
              setOpen(false)
            }}>About</button>
            <button onClick={()=>{
              router.push('/contact')
              setOpen(false)
            }}>Contact</button>
            {
              status === "unauthenticated" ? (<button onClick={()=>{
                router.push('/login')
                setOpen(false)
              }}>Contact</button>):(<>
              <button onClick={()=>{
              router.push('/write')
              setOpen(false)
            }}>Write</button>
            <button onClick={()=>{
              router.push('/profile')
              setOpen(false)
            }}>Profile</button>
                <button onClick={()=>signOut()} className={styles.logoutBtn}>Logout</button>
                
              </>)
            }
          </div>
        )
      }
    </>
  )
}

export default AuthLinks