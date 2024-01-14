// pages/ContactUs.js

import Head from 'next/head';
import styles from './contact.module.css';

export default function ContactUs() {
  return (
    <div className={styles.container}>
      

      <main className={styles.main}>
        <h1 className={styles.title}>Contact Us</h1>

        <div className={styles.contactInfo}>
          <p>Email: <a href="mailto:abhaytechhub@gmail.com">abhaytechhub@gmail.com</a></p>
          <p>Phone: 960-887-0864</p>
        </div>


        <div className={styles.connectWithUs}>
          <p>Connect With Us:</p>
          <ul>
            <li><a href="https://www.facebook.com/abhaygupta07788" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/abhay_gupta07788/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://api.whatsapp.com/send?phone=916284023056" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
          </ul>
        </div>

      </main>
        <form  className={styles.contactForm}>
            <label htmlFor="name">Name:</label>
            <input className={styles.inputBox} type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input className={styles.inputBox} type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone:</label>
            <input className={styles.inputBox} type="tel" id="phone" name="phone" required />

            <label htmlFor="subject">Subject:</label>
            <input className={styles.inputBox} type="text" id="subject" name="subject" required />

            <label htmlFor="message">Message:</label>
            <textarea className={styles.inputBox} id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
        </form>
    </div>
  );
}
