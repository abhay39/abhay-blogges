import Image from 'next/image';
import style from './navbar.module.css';
import { FaFacebook,FaGithub, FaLinkedin  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToogle from '../themeToogle/ThemeToogle';

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.social}>
        <a href="">
          <FaFacebook  color='blue' size={25}/>
        </a>
        <a href="">
          <FaGithub  color='black' size={25}/>
        </a>
        <a href="">
          <FaLinkedin   color='blue' size={25}/>
        </a>
        <a href="">
          <SiLeetcode  color='orange' size={25}/>
        </a>
      </div>
      <div className={style.logo}>
       <Link href={"/"}>ABHAYBLOGS</Link>
      </div>
      <div className={style.links}>
        <ThemeToogle />
        <Link href="/" className={style.link}>Homepage</Link>
        <Link href="/" className={style.link}>Contact</Link>
        <Link href="/" className={style.link}>About</Link>
        <AuthLinks />
      </div>
      
    </div>
  )
}

export default Navbar