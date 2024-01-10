"use client"
import Link from 'next/link';
import styles from './authLinks.module.css';
import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';


const AuthLinks = () => {
  
  const {status}=useSession();

  const [open,setOpen]=useState(false)

  return (
    <>
      {
        status === "unauthenticated" ? (<Link className={styles.link} href="/login">Login</Link>):(<>
          <Link className={styles.link} href="/write">Write</Link>
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
            <Link href={'/'}>HomePage</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/contact'}>Contact</Link>
            {
              status === "notauthorized" ? (<Link href="/login">Login</Link>):(<>
                <Link href="/write">Write</Link>
                <span style={styles.link}>Logout</span>
              </>)
            }
          </div>
        )
      }
    </>
  )
}

export default AuthLinks