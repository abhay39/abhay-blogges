import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({item}) => {
  const items=item[0];



  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={items.imageURL} alt="" fill  className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>

        <Link href={`/posts/${items.title}`}>
          <h1 className={styles.title}>
            {items.title}
          </h1>
        </Link>

        <p className={styles.desc} dangerouslySetInnerHTML={{ __html: items.description?.substring(0,200) }} />

        <Link href={`/posts/${items.title}`}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
