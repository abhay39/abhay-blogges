import Link from 'next/link';
import styles from './menuPost.module.css';
import Image from 'next/image';

const MenuPost = ({withImage}) => {
  return (
    <div className={styles.items}>
        <Link href="/" className={styles.item}>
            {
                withImage && (<div className={styles.imageContainer}>
                    <Image  src="/p1.jpeg" alt="" fill  className={styles.image}/>
                  </div>)
            }
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.travel}`}>Travel</span>
              <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
              <div className="details">
                <span className={styles.username}>Abhay Gupta</span>
                <span className={styles.date}> - 10.03.2023</span>
              </div>
            </div>
        </Link>

        <Link href="/" className={styles.item}>
            {
                withImage && (<div className={styles.imageContainer}>
                    <Image  src="/p1.jpeg" alt="" fill  className={styles.image}/>
                  </div>)
            }
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.culture}`}>CULTURE</span>
              <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
              <div className="details">
                <span className={styles.username}>Abhay Gupta</span>
                <span className={styles.date}> - 10.03.2023</span>
              </div>
            </div>
        </Link>
        <Link href="/" className={styles.item}>
            {
                withImage && (<div className={styles.imageContainer}>
                    <Image  src="/p1.jpeg" alt="" fill  className={styles.image}/>
                  </div>)
            }
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.food}`}>FOOD</span>
              <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
              <div className="details">
                <span className={styles.username}>Abhay Gupta</span>
                <span className={styles.date}> - 10.03.2023</span>
              </div>
            </div>
        </Link>
        <Link href="/" className={styles.item}>
            {
                withImage && (<div className={styles.imageContainer}>
                    <Image  src="/p1.jpeg" alt="" fill  className={styles.image}/>
                  </div>)
            }
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.fashion}`}>FASHION</span>
              <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
              <div className="details">
                <span className={styles.username}>Abhay Gupta</span>
                <span className={styles.date}> - 10.03.2023</span>
              </div>
            </div>
        </Link>
      </div>
  )
}

export default MenuPost