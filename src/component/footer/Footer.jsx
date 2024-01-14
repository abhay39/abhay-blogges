
import style from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <div className={style.logo}>
          {/* <Image src="/logo.png" alt='Abhay blog' width={50} height={50}/> */}
          <h1 className={style.logoText}>YOURVIEW</h1>
        </div>
        <p className={style.description}>Welcome to YOURVIEWS, a platform dedicated to sharing opinions and thoughts on a variety of topics. Our mission is to provide a space for individuals to express their ideas and engage in meaningful discussions.</p>
        {/* <div className={style.icons}>
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
        </div> */}
      </div>
      <div className={style.links}>
          <div className={style.list}>
            <span className={style.listTitle}>Links</span>
            <Link href="/" >Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
      
      
        <div className={style.list}>
          <span className={style.listTitle}>Tags</span>
          <Link href={`/blog?title=style`} >Style</Link>
          <Link href="/blog?title=fashion" >Fashion</Link>
          <Link href="/blog?title=coding" >Coding</Link>
          <Link href="/blog?title=travel" >Travel</Link>
        </div>
      
          <div className={style.list}>
            <span className={style.listTitle}>Social</span>
            <Link href="https://www.facebook.com/abhaygupta07788" >Facebook</Link>
            <Link href="https://www.linkedin.com/in/abhaykumargupta/" >Linkedin</Link>
            <Link href="https://github.com/abhay39" >Github</Link>
            <Link href="https://leetcode.com/abhayguptaak39/" >Leetcode</Link>
          </div>
        </div>
      </div>
  )
}

export default Footer