import Link from 'next/link';
import styles from './authLinks.module.css';


const AuthLinks = () => {
  const status="notauthorized";

  return (
    <div>
      {
        status === "notauthorized" ? (<Link href="/login">Login</Link>):(<>
          <Link href="/write">Write</Link>
          <span style={styles.link}>Loogut</span>
        </>)
      }
    </div>
  )
}

export default AuthLinks