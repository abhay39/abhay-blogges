
import style from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook,FaGithub, FaLinkedin  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <div className={style.logo}>
          <Image src="/logo.png" alt='Abhay blog' width={50} height={50}/>
          <h1 className={style.logoText}>Abhay Blog</h1>
        </div>
        <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam corporis animi quasi repellat sunt, non eos id alias officia a praesentium delectus, reiciendis aspernatur! Sed eum voluptate pariatur libero numquam.</p>
        <div className={style.icons}>
          <a href="">
            <FaFacebook  color='blue' size={18}/>
          </a>
          <a href="">
            <FaGithub  color='black' size={18}/>
          </a>
          <a href="">
            <FaLinkedin   color='blue' size={18}/>
          </a>
          <a href="">
            <SiLeetcode  color='orange' size={18}/>
          </a>
        </div>
      </div>
      <div className={style.links}>
          <div className={style.list}>
            <span className={style.listTitle}>Links</span>
            <Link href="/" >Home</Link>
            <Link href="/" >Blog</Link>
            <Link href="/" >About</Link>
            <Link href="/" >Contact</Link>
          </div>
      
      
        <div className={style.list}>
          <span className={style.listTitle}>Tags</span>
          <Link href="/" >Style</Link>
          <Link href="/" >Fashion</Link>
          <Link href="/" >Coding</Link>
          <Link href="/" >Travel</Link>
        </div>
      
          <div className={style.list}>
            <span className={style.listTitle}>Social</span>
            <Link href="/" >Facebook</Link>
            <Link href="/" >Linkedin</Link>
            <Link href="/" >Github</Link>
            <Link href="/" >Leetcode</Link>
          </div>
        </div>
      </div>
  )
}

export default Footer