import React from 'react';
import styles from './Subscribe.module.css';
import bluebg from "../../images/bluebg.png";

const Subscribe = () => {
  return (
    <div className={styles.SubscribeContainer}>
      <img src={bluebg} className={styles.Banner} alt="Banner" />
      <div className={styles.SubscribeInfo}>
        <h2 className={styles.BoldText}>An enterprise template to ramp up your company website</h2>
        <div className={styles.EmailInfo}>
          <input type="email" name="email" placeholder="Your email address" className={styles.EmailInput} />
          <a href="***" className={styles.SubscribeBtn}>Start now</a>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
