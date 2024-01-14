// pages/AboutUs.js

import Head from 'next/head';
import styles from './aboutUs.module.css';

export default function AboutUs() {
  return (
    <div className=" w-full text-justify">
      

      <main>
        <h1 className={styles.title}>About Us</h1>

        <div>
          <p>Welcome to YOURVIEWS, a platform dedicated to sharing opinions and thoughts on a variety of topics. Our mission is to provide a space for individuals to express their ideas and engage in meaningful discussions.</p>

          <p>Founded by Abhay Kumar Gupta, our CEO, YOURVIEWS is driven by a passion for knowledge sharing and community building. Abhay Kumar Gupta leads our team with a vision to create a platform that fosters diverse perspectives and encourages open dialogue.</p>

          <p>Whether you are a seasoned contributor or a newcomer, we invite you to join our community and share your insights on the selected categories. Your unique voice contributes to the richness of discussions on Your Website Name.</p>
        </div>

        <div className=' mt-3 '>
          <h2 className=' font-semibold'>Meet Our CEO - Abhay Kumar Gupta</h2>
          <p>Abhay Kumar Gupta is the visionary leader behind YOURVIEWS. With a background in Computer Science and Engineering, Abhay is committed to creating a platform that empowers individuals to share their opinions and thoughts. His leadership and dedication drive the success of YOURVIEWS</p>
        </div>
      </main>
    </div>
  );
}
