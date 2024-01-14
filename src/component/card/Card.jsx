import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({item}) => {

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={item?.imageURL} alt="" height={350} width={350}  className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span  className={styles.date}>{item.createdAt.slice(0,10)} - </span>
          <Link href={`/blog?title=${item?.category}`} className={styles.category}>{item.category.toUpperCase()}</Link>
        </div>

        <Link href={`/posts/${item?._id}`}>
          <h1 className={styles.title}>
            {item?.title} 
          </h1>
        </Link>

        <p className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.description?.substring(0,200) }} />

        <Link href={`/posts/${item?._id}` } className={styles.readMore}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
