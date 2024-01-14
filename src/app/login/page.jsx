"use client"
import { signIn, useSession } from 'next-auth/react';
import styles from './login.module.css';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const {data,status}=useSession();
  const router=useRouter();

  if(status==='loading'){
    return (<div className={styles.loader}>
    <div className={styles.customLoader}></div>
      <h1>Loading</h1>
</div>)
  }
  if(status==='authenticated'){
    router.push('/');
  }

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton} onClick={()=>signIn('google')}>Sign in with Google</div>
            <div className={styles.socialButton} onClick={()=>signIn('github')}>Sign in with Github</div>
        </div>
    </div>
  )
}

export default LoginPage