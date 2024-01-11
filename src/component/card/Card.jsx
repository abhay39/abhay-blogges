import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({item}) => {
  



  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={item?.imageURL} alt="" fill  className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>{item.createdAt.slice(0,10)} - </span>
          <span className={styles.category}>{item.category.toUpperCase()}</span>
        </div>

        <Link href={`/posts/${item?._id}`}>
          <h1 className={styles.title}>
            {item?.title} 
          </h1>
        </Link>

        <p className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.description?.substring(0,200) }} />

        <Link href={`/posts/${item?._id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
