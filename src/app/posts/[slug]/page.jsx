"use client"
import Menu from "@/component/menu/Menu";
import style from "./singlePage.module.css";
import Image from "next/image";
import Comment from "@/component/comment/Comment";
import { useRouter } from 'next/navigation';

const SinglePage = (slug) => {
  const title=slug.params.slug;
  console.log(title)

  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div className={style.textContainer}>
          <h1 className={style.title}> Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={style.user}>
            <div className={style.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={style.avatar} />
            </div>
            <div className={style.userTextContaier}>
              <span className={style.username}>Abhay Gupta</span>
              <span className={style.date}>11.11.23</span>
            </div>
          </div>
        </div>
        <div className={style.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={style.image} />
        </div>
      </div>
      <div className={style.content}>
        <div className={style.post}>
            <div className={style.descriprion}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestias perspiciatis, quibusdam possimus rem laboriosam voluptatum quo veritatis placeat voluptates distinctio, consectetur architecto reprehenderit, aut magni ipsam illo! Incidunt, aspernatur!</p>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestias perspiciatis, quibusdam possimus rem laboriosam voluptatum quo veritatis placeat voluptates distinctio, consectetur architecto reprehenderit, aut magni ipsam illo! Incidunt, aspernatur!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestias perspiciatis, quibusdam possimus rem laboriosam voluptatum quo veritatis placeat voluptates distinctio, consectetur architecto reprehenderit, aut magni ipsam illo! Incidunt, aspernatur!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestias perspiciatis, quibusdam possimus rem laboriosam voluptatum quo veritatis placeat voluptates distinctio, consectetur architecto reprehenderit, aut magni ipsam illo! Incidunt, aspernatur!</p>
            </div>
            <div className={style.comments}>
                <Comment />
            </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
