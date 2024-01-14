"use client"
import style from './navbar.module.css';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToogle from '../themeToogle/ThemeToogle';


const Navbar = () => {

  return (
    <div className={style.container} >
      <div className={style.logo}>
       <Link href={"/"}>YOURVIEWS</Link>
      </div>
      <div className={style.logo}>
       
      </div>
      <div>
        
      </div>
      <div className={style.links}>
        <ThemeToogle />
        <Link href="/" className={style.link}>Homepage</Link>
        <Link href="/contact" className={style.link}>Contact</Link>
        <Link href="/about" className={style.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar