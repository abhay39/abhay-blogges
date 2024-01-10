import Link from 'next/link'
import styles from './comment.module.css'
import Image from 'next/image'

const Comment = () => {
    const status="authenticated"
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {
            status === "authenticated"?
            <div className={styles.write}>
                <textarea rows={5} className={styles.input}  placeholder='Write a comment...' />
                <button className={styles.button} type="submit">Submit</button>
            </div>
            :
            <div className={styles.notAuthenticated}>
                <Link href="/login">You must be logged in to post a comment</Link>
            </div>
        }
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" width={50} height={50} alt='' className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Abhay Gupta</span>
                        <span className={styles.date}>01.01.2023</span>
                    </div>
                </div>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad quisquam, ea tempora labore facilis architecto recusandae quaerat voluptatum est commodi sapiente. Ut voluptas recusandae tempora, ratione laboriosam eveniet accusantium.</p>
            </div>
        </div>
    </div>
  )
}

export default Comment