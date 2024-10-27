import React from 'react'
import styles from "./HeroSection.module.css"
import mockup from "../../images/Mockup.png"
import userpic from "../../images/picperson.png"

const HeroSection = () => {
  return (
    <div className={styles.HeroContainer}>
        <div className={styles.HeaderInfo}>
            <p className={styles.Section}> Blog</p>
            <h2 className={styles.BoldText}>Thoughts and words</h2>
        </div>
        <div className={styles.MockUpContainer}>
            <img src={mockup} className={styles.Mockup} alt="mockup"/>
            <div className={styles.MockupContent}>
            <div className={styles.MockupInfo}>
                <div className={styles.CategoryContent}>
                    <p className={styles.Category}>Category</p>
                    <p className={styles.CategoryDate}>November 22, 2021</p>
                </div>
                <div className={styles.Desc}>Pitch termsheet backing validation focus release.</div>
                <div className={styles.UserDetails}>
                    <img src={userpic} className={styles.UserPic} alt="userpic"/>
                    <p className={styles.User}>Chandler Bing</p>
                </div>
            </div>
            </div>
        </div>
        <div className={styles.Line}></div>
    </div>
  )
}

export default HeroSection